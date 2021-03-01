import Vue from "vue";
import VueRouter from "vue-router";
import CheckAuth from "./auth-check";
import loader from "../plugins/preloader";
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

router.beforeResolve((to, from, next) => {
  if (to.path) {
    loader.preloader(true, "primary", 64, 1).then(r => r);
  }
  next();
});
router.afterEach(() => {
  setTimeout(function() {
    loader.preloader(false, "").then(r => r);
  }, 888);
});

router.beforeEach(CheckAuth);

export default router;
