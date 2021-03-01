import Vue from "vue";
import Vuex from "vuex";
import notification from "../store/modules/notification";
import preloader from "../store/modules/preloader";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notification,
    preloader
  }
});
