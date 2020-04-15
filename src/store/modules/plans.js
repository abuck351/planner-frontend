import axios from "axios";
import randomColor from "randomcolor";

function parseDaysOfWeek(daysStr) {
  let daysMap = new Map([
    [1, "M"],
    [2, "Tu"],
    [3, "W"],
    [4, "Th"],
    [5, "F"],
  ]);

  let days = [];
  for (const [num, day] of daysMap) {
    if (daysStr.includes(day)) {
      days.push(num);
    }
  }
  return days;
}

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

const state = {
  plan: null,
};

const getters = {
  currentPlan: (state) => state.plan,
  courseEvents: (state) => {
    let events = [];

    if (state.plan && state.plan.courses) {
      for (const course of state.plan.courses) {
        events.push({
          groupId: course.code,
          title: course.title,
          daysOfWeek: parseDaysOfWeek(course.days),
          startTime: course.start_time,
          endTime: course.end_time,
          allDay: course.start_time === null,
          duration: "01:00",
          color: randomColor(),
        });
      }
    }

    return events;
  },
};

const actions = {
  async createPlan({ commit }, planData) {
    try {
      const response = await api.post(
        `/plans/${planData.name}?term=${planData.term}`
      );
      const plan = response.data.plan;
      commit("setPlan", plan);
      return {
        status: response.status,
        message: response.data.message,
        plan,
      };
    } catch (err) {
      return {
        status: err.response.status,
        message: err.response.data.message,
      };
    }
  },
  async loadPlan({ commit }, planData) {
    try {
      const response = await api.get(
        `/plans/${planData.name}?term=${planData.term}`
      );
      const plan = response.data.plans[0];
      commit("setPlan", plan);
      return { status: response.status, message: response.data.message, plan };
    } catch (err) {
      return {
        status: err.response.status,
        message: err.response.data.message,
      };
    }
  },
  async addCourse({ commit }, { planName, planTerm, courseCode }) {
    try {
      const addCourseResponse = await api.post(`/plans/${planName}/course`, {
        term: planTerm,
        course_code: courseCode,
      });

      // Reload the plan
      const loadPlanResponse = await api.get(
        `/plans/${planName}?term=${planTerm}`
      );
      const plan = loadPlanResponse.data.plans[0];
      commit("setPlan", plan);

      return {
        status: addCourseResponse.status,
        message: addCourseResponse.data.message,
      };
    } catch (err) {
      return {
        status: err.response.status,
        message: err.response.data.message,
      };
    }
  },
};

const mutations = {
  setPlan: (state, plan) => (state.plan = plan),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
