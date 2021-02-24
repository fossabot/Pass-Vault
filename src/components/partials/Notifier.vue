<template>
  <v-snackbar class="mt-10" v-model="show" :color="type" elevation="24" top app>
    <div class="text-center">
      {{ message }}
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    show: false,
    message: "",
    type: ""
  }),

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "showNotification") {
        this.message = state.notification.content;
        this.type = state.notification.type;
        this.show = true;
      }
    });
  }
};
</script>
