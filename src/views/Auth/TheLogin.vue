<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto">
          <v-form @submit.stop.prevent="onLogin" ref="form" lazy-validation>
            <v-toolbar flat>
              <v-toolbar-title>Sign In</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                rounded
                outlined
                dense
                label="Email"
                name="Email"
                :rules="emailRules"
                v-model="loginForm.email"
                :prepend-icon="icons.mdiEmail"
                type="text"
              ></v-text-field>

              <v-text-field
                rounded
                outlined
                dense
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? icons.mdiEye : icons.mdiEyeOff"
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
                v-model="loginForm.password"
                label="Password"
                name="password"
                :prepend-icon="icons.mdiLock"
              ></v-text-field>

              <div class="text-center">
                <v-btn to="register" class="overline" small text>
                  Don't have an account yet?
                </v-btn>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                text
                rounded
                :loading="loading"
                :disabled="loading"
                >Login</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail, mdiLock, mdiEye, mdiEyeOff } from "@mdi/js";

export default {
  name: "TheLogin",
  data: () => ({
    loading: false,
    showPassword: false,
    loginForm: {
      email: localStorage.email || "",
      password: ""
    },
    icons: {
      mdiEmail,
      mdiLock,
      mdiEye,
      mdiEyeOff
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [
      v => (v || "").length <= 24 || "A maximum of 24 characters is allowed",
      v => (v || "").length >= 6 || "A minimum of 6 characters is allowed",
      v => (v || "").indexOf(" ") < 0 || "No spaces are allowed"
    ]
  }),
  methods: {
    async onLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$store.dispatch("signIn", this.loginForm);
          await this.$router.push(
            this.$route.query.path ? this.$route.query.path : "/"
          );
        } catch (err) {
          this.$notifier.showMessage(err, "error");
        } finally {
          this.loading = false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
