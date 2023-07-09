import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import BlogDetailsPage from "../pages/BlogDetailsPage.vue";
import PageNumber404 from "../pages/PageNumber404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectPage,
  },
  {
    path: "/project/details",
    name: "projectDetails",
    component: ProjectDetailsPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/blog/details",
    name: "blogDetails",
    component: BlogDetailsPage,
  },
  {
    path: "/404",
    name: "pageNumber404",
    component: PageNumber404,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
