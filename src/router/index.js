import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../views/Schedule.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Schedule",
    component: Schedule
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
