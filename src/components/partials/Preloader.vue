<template>
  <v-overlay v-model="show" :opacity="opacity" color="background">
    <v-progress-circular
      v-if="show"
      :color="color"
      :size="size"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "Preloader",
  data: () => ({
    show: false,
    color: "primary",
    size: "64",
    opacity: "1"
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "showPreloaderMutation") {
        this.show = state.preloader.show;
        this.color = state.preloader.color;
        this.size = state.preloader.size;
        this.opacity = state.preloader.opacity;
      }
    });
  }
};
</script>

<style scoped></style>
