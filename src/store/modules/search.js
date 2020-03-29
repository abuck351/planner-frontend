import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});

const state = {
  results: []
};

const getters = {
  allResults: state => state.results
};

const actions = {
  async search({ commit }, searchParams) {
    const response = await api.post("/search", searchParams);
    commit("setResults", response.data.results);
  }
};

const mutations = {
  setResults: (state, results) => (state.results = results)
};

export default {
  state,
  getters,
  actions,
  mutations
};
