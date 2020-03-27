import Vue from "vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import App from "./App.vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
