<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto">
          <v-form @submit.stop.prevent="signUp" ref="form" lazy-validation>
            <v-toolbar flat>
              <v-toolbar-title>Sign Up</v-toolbar-title>
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
                v-model="registerForm.email"
                :prepend-icon="icons.mdiEmail"
                required
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
                v-model="registerForm.password"
                label="Password"
                name="password"
                :prepend-icon="icons.mdiLock"
                required
              ></v-text-field>

              <v-text-field
                rounded
                outlined
                dense
                label="Name"
                name="Name"
                :rules="nameRules"
                v-model="registerForm.name"
                :prepend-icon="icons.mdiAccount"
                required
                type="text"
              ></v-text-field>

              <v-checkbox
                v-model="registerForm.agreeTerms"
                dark
                :off-icon="icons.mdiCheckboxBlankOutline"
                :on-icon="icons.mdiCheckBoxOutline"
                label="Agree to terms of use"
                :rules="[v => !!v || 'You must agree to continue!']"
                required
              ></v-checkbox>

              <div class="text-center">
                <v-btn to="login" class="overline" small text>
                  Already Registered?
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
                >Sign Up</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiAccount,
  mdiLock,
  mdiCheckboxBlankOutline,
  mdiCheckBoxOutline,
  mdiEmail
} from "@mdi/js";
export default {
  name: "TheSignUp",
  data: () => ({
    passwordConfirm: "",
    loading: false,
    showPassword: false,
    registerForm: {
      email: "",
      password: "",
      name: "",
      agreeTerms: false
    },
    icons: {
      mdiAccount,
      mdiLock,
      mdiCheckboxBlankOutline,
      mdiCheckBoxOutline,
      mdiEmail
    },
    nameRules: [v => !!v || "Name Required"],
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
    async signUp() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await this.$store.dispatch("signUp", this.registerForm);
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
