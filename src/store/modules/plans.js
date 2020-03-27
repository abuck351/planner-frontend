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
    // console.log(
    //   process.env.VUE_APP_API_BASE_URL + `/plans/${plan.na}?term=${term}`
    // );
    const response = await api.post(`/plans/${plan.name}?term=${plan.term}`);
    console.log("HELLO", response);
    commit("setPlan", response.data);
  }
};

const mutations = {
  setPlan: (state, plan) => (this.plan = plan)
};

export default {
  state,
  getters,
  actions,
  mutations
};
