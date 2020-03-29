import Vue from "vue";
import Vuex from "vuex";
import plans from "./modules/plans";
import depts from "./modules/depts";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    plans,
    depts,
    search
  }
});
