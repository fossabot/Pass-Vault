import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ru from "vuetify/lib/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ec625f",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        google: "#4285F4",
        github: "#333333",
        facebook: "#4267B2"
      },
      dark: {
        primary: "#ec625f",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        google: "#EA4335",
        github: "#F5F5F5",
        facebook: "#4267B2"
      }
    }
  },
  lang: {
    locales: { ru },
    current: "ru"
  }
});
