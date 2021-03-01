import store from "../store";
export default (to, from, next) => {
  const isAuthPage = to.matched.some(record => record.meta.auth);
  const isAuthenticated = store.getters.isAuthenticated;
  if (isAuthPage && !isAuthenticated) {
    return next({ name: "Login" });
  } else {
    next();
  }
};
