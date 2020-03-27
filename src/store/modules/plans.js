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
  async createPlan({ commit }, plan) {
    try {
      const response = await api.post(`/plans/${plan.name}?term=${plan.term}`);
      commit("setPlan", response.data.plan);
      return response;
    } catch (err) {
      return err.response;
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
