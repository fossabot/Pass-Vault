import Vue from "vue";
import VueRouter from "vue-router";
import CheckAuth from "./auth-check";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      auth: true
    },
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth/TheLogin.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
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
