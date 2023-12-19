import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop.vue";
import Dashboard from "@/views/Dashboard.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/shop",
      name: "Shop",
      component: Shop,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
