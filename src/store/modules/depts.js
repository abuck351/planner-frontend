import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});

const state = {
  depts: []
};

const getters = {
  allDepts: state => state.depts,
  allDeptsAsSelect: state =>
    state.depts.map(dept => ({
      value: dept.code,
      text: dept.name
    }))
};

const actions = {
  async loadAllDepts({ commit }) {
    const response = await api.get("/depts");
    commit("setDepts", response.data.depts);
  }
};

const mutations = {
  setDepts: (state, depts) => (state.depts = depts)
};

export default {
  state,
  getters,
  actions,
  mutations
};
