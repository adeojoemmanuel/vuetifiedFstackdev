import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import index from "../views/index.vue";
import p404 from "../views/404.vue";
import about from "../views/about.vue";
import blogDetails from "../views/blog-details.vue";
import caseStudy from "../views/case-study.vue";
import contact from "../views/contact.vue";
import latestBlog from "../views/latestblog.vue";
import portfolio from "../views/portfolio.vue";
import privacyPolicy from "../views/privacy-policy.vue";
import serviceTwo from "../views/service-two.vue";
import service from "../views/services.vue";
import studyCase from "../views/single-case-study.vue";
import singleService from "../views/single-service.vue";
import teamDetails from "../views/team-details.vue";
import team from "../views/team.vue";
import testimonial from "../views/testimonial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: index,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/blogDetails",
    name: "blogDetails",
    component: blogDetails,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/caseStudy",
    name: "caseStudy",
    component: caseStudy,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/latestBlog",
    name: "latestBlog",
    component: latestBlog,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/privacyPolicy",
    name: "privacyPolicy",
    component: privacyPolicy,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/serviceTwo",
    name: "serviceTwo",
    component: serviceTwo,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/service",
    name: "service",
    component: service,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/studyCase",
    name: "studyCase",
    component: studyCase,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/singleService",
    name: "singleService",
    component: singleService,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/teamDetails",
    name: "teamDetails",
    component: teamDetails,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: team,
    meta: {
      header: 1,
      reload: true
    }
  },
  {
    path: "/testimonial",
    name: "testimonial",
    component: testimonial,
    meta: {
      header: 1,
      reload: true
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
