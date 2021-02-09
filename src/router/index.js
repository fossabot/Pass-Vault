import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CheckAuth from "./auth-check";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      auth: true
    },
    component: () => import("../views/Auth/TheLogin.vue")
  },
  {
    path: "/register",
    name: "SignUp",
    meta: {
      auth: true
    },
    component: () => import("../views/Auth/TheSignUp.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(CheckAuth);

export default router;
