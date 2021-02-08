<template>
  <v-app>
    <v-system-bar window dark class="app-header">
      <span>MyPass - inDev version</span>
      <v-spacer></v-spacer>
      <v-icon @click="onClickMin">{{ icons.mdiMinus }}</v-icon>
      <v-icon @click="onClickMax">{{ icons.mdiCheckboxBlankOutline }}</v-icon>
      <v-icon @click="onClickQuit">{{ icons.mdiClose }}</v-icon>
    </v-system-bar>
  </v-app>
</template>

<script>
import { remote } from "electron";
import { mdiMinus, mdiCheckboxBlankOutline, mdiClose } from "@mdi/js";

export default {
  name: "App",
  data: () => ({
    icons: {
      mdiMinus,
      mdiCheckboxBlankOutline,
      mdiClose
    }
  }),
  methods: {
    onClickQuit() {
      remote.app.quit();
    },

    onClickMin() {
      remote.getCurrentWindow().minimize();
    },

    onClickMax() {
      if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().unmaximize();
      } else {
        remote.getCurrentWindow().maximize();
      }
    }
  }
};
</script>

<style lang="scss">
.app-header {
  -webkit-user-select: none;
  -webkit-app-region: drag;

  & > * {
    -webkit-app-region: no-drag;
  }
}
</style>
