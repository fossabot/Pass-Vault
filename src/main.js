import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import firebase from "firebase";
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCcB9AB4B2hHYYLMTZez8pKEVlPvy82Bvk",
  authDomain: "mypass-project.firebaseapp.com",
  databaseURL: "https://mypass-project-default-rtdb.firebaseio.com",
  projectId: "mypass-project",
  storageBucket: "mypass-project.appspot.com",
  messagingSenderId: "729251897591",
  appId: "1:729251897591:web:4ae1e35acfc66b1e4433f2"
};
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
