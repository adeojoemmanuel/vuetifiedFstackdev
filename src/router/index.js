import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";
import sample from '@/views/sample.vue';
import p404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/sample",
    component: sample,
    name: "sample"
  },
  {
    path: "/valueind",
    name: "valind",
    component: () => import("../views/val-ind.vue"),
    meta: {
      header: 1
    }
  },
  {
    path: "*",
    component: p404,
    meta: {
      header: 2
    }
  }
];
// mode: "history",
// mode: "hash",
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
