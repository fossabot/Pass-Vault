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
      throw err;
    }
  },

  async logOut() {
    await fbAuth.signOut();
  }
};

export default {
  actions
};
