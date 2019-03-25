import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Shop from "@/components/Shop";
import Dashboard from "@/components/Dashboard";

import TC_Wrapper, { WithTracker } from "vue-tag-commander";

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);

// // setting the tags for the current and prevous URL
wrapper.trackRoutes(true);

// // to set the TagCommander container provide the id
wrapper.addContainer(
  "container_head",
  "../../static/tag-commander-head.js",
  "head"
);
wrapper.addContainer(
  "container_body",
  "../../static/tag-commander-body.js",
  "body"
);

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: WithTracker(Index, {
        tcReloadOnly: [{ ids: "4056", idc: "12" }]
      })
    },

    {
      path: "/shop",
      name: "shop",
      component: WithTracker(Shop, {
        tcReloadOnly: [
          { ids: "4056", idc: "12" },
          { ids: "4056", idc: "11", options: ["datastorage", "deduplication"] }
        ]
      })
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: WithTracker(Dashboard, {
        tcReloadOnly: [{ ids: "4056", idc: "12" }]
      })
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
