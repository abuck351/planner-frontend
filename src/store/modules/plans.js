import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});

const state = {
  plan: null
};

const getters = {
  currentPlan: state => state.plan
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
        plan
      };
    } catch (err) {
      return {
        status: err.response.status,
        message: err.response.data.message
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
        message: err.response.data.message
      };
    }
  }
};

const mutations = {
  setPlan: (state, plan) => (state.plan = plan)
};

export default {
  state,
  getters,
  actions,
  mutations
};
