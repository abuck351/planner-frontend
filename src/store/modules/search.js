import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

const state = {
  results: [],
  searching: false,
};

const getters = {
  allResults: (state) => state.results,
  isSearching: (state) => state.searching,
};

const actions = {
  async search({ commit }, searchParams) {
    commit("setSearching", true);
    const response = await api.post("/search", searchParams);
    commit("setResults", response.data.results);
    commit("setSearching", false);
  },
};

const mutations = {
  setResults: (state, results) => (state.results = results),
  setSearching: (state, searching) => (state.searching = searching),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
