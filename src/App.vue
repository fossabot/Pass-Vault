<template>
  <v-app>
    <system-bar
      :theme="currentTheme"
      :platform="platform"
      :on-close="close"
      :on-maximize="toggleMaximize"
      :on-minimize="minimize"
      :is-maximizable="isMaximizable"
      :is-closable="isClosable"
      :is-minimizable="isMinimizable"
      :show-icon="showIcon"
      :show-title="showTitle"
    >
      <template slot="icon">
        <img src="@/assets/logo_white.svg" alt="logo" />
      </template>

      <template slot="title">
        {{ $t("app-name") }}
      </template>
    </system-bar>
    <notifier />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { remote } from "electron";
import Notifier from "./components/partials/Notifier";
import SystemBar from "./components/partials/SystemBar";
export default {
  name: "App",
  components: { SystemBar, Notifier },
  data: () => ({
    platform: process.platform,
    isMaximizable: remote.getCurrentWindow().isMaximizable(),
    isMinimizable: remote.getCurrentWindow().isMinimizable(),
    isClosable: remote.getCurrentWindow().isClosable(),
    showTitle: true,
    showIcon: true
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: {
    currentTheme() {
      if (this.$vuetify.theme.dark) {
        return "dark";
      } else {
        return "light";
      }
    }
  },
  methods: {
    close() {
      remote.getCurrentWindow().close();
    },
    toggleMaximize() {
      let win = remote.getCurrentWindow();
      if (win.isMaximized()) win.unmaximize();
      else win.maximize();
    },
    minimize() {
      remote.getCurrentWindow().minimize();
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0;
}
</style>
