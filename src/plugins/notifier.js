import store from "../store";
const notifier = {
    install(Vue) {
        Vue.prototype.$notifier = {
            showMessage: function (content, type) {
                store.commit("snackbar/MUTATE_SHOW_MESSAGE", { content, type });
            },
        };
    },
};

export default notifier;