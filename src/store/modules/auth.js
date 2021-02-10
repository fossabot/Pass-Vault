import { fbAuth } from "@/utils/firebase";
import Vue from "vue";

const actions = {
  async signIn({ dispatch }, { email, password }) {
    try {
      const { user } = await fbAuth.signInWithEmailAndPassword(email, password);
      localStorage.email = email;
      await dispatch("fetchOrCreateInfo", {
        uid: user.uid
      });
    } catch (err) {
      Vue.prototype.$notifier.showMessage(err, "error");
    }
  },

  async signUp({ dispatch }, { email, password, name, accepted }) {
    try {
      await fbAuth.createUserWithEmailAndPassword(email, password);
      const uid = await dispatch("getUid");
      await dispatch("fetchOrCreateInfo", {
        uid,
        name: name,
        bill: 10000,
        accepted: accepted
      });
    } catch (err) {
      Vue.prototype.$notifier.showMessage(err, "error");
    }
  },

  async logOut() {
    await fbAuth.signOut();
  },

  getUid() {
    const user = fbAuth.currentUser;
    return user ? user.uid : null;
  }
};

export default {
  actions
};
