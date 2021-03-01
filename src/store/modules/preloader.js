import Vue from "vue";

const state = () => ({
  show: false,
  color: "",
  size: "",
  opacity: ""
});
const mutations = {
  showPreloaderMutation: (state, payload) => {
    state.show = payload.show;
    state.color = payload.color;
    state.size = payload.size;
    state.opacity = payload.opacity;
  }
};

const actions = {
  async showPreloader({ commit }, payload) {
    try {
      commit("showPreloaderMutation", payload);
    } catch (err) {
      Vue.prototype.$notifier.showMessage(err, "error");
    }
  }
};
export default { state, mutations, actions };
