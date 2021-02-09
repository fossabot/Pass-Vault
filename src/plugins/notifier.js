import store from "../store";
const notifier = {
  install(Vue) {
    Vue.prototype.$notifier = {
      showMessage: function(content, type) {
        store.commit("showNotification", { content, type });
      }
    };
  }
};

export default notifier;
