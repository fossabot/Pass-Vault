import { fbAuth } from "@/utils/firebase";

export default (to, from, next) => {
  const currentUser = fbAuth.currentUser;
  const requireAuth = to.matched.some(rec => rec.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
};
