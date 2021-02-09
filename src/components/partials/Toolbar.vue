<template>
  <v-app-bar color="primary" dense dark>
    <v-toolbar-title>Welcome to MyPass</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>{{ icons.mdiMagnify }}</v-icon>
    </v-btn>
    <v-btn icon @click="logout">
      <v-icon>{{ icons.mdiLogoutVariant }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiMagnify, mdiDotsVertical, mdiLogoutVariant } from "@mdi/js";
export default {
  name: "Toolbar",
  data: () => ({
    icons: {
      mdiMagnify,
      mdiDotsVertical,
      mdiLogoutVariant
    }
  }),
  methods: {
    async logout() {
      await this.$store.dispatch("logOut");
      await this.$router.push(`/login?message=logout&path=${this.$route.path}`);
    }
  }
};
</script>

<style scoped></style>
