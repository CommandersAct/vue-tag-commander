import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index.vue";
import Shop from "@/views/Shop.vue";
import Dashboard from "@/views/Dashboard.vue";

import TC_Wrapper from "vue-tag-commander";

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);

// // setting the tags for the current and prevous URL
// wrapper.trackRoutes(true);

// // to set the TagCommander container provide the id
wrapper.addContainer(
    "container_head",
    "/tag-commander-head.js",
    "head"
);
wrapper.addContainer(
    "container_body",
    "/tag-commander-body.js",
    "body"
);

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },

    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
