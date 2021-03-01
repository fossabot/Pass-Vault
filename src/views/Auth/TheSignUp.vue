<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto">
          <v-form @submit.stop.prevent="onSignUp" ref="form" lazy-validation>
            <v-toolbar flat>
              <v-toolbar-title>{{ $t("sign-up") }}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                rounded
                outlined
                dense
                :label="$t('email')"
                :name="$t('email')"
                :rules="emailRules"
                v-model="registerForm.email"
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
                v-model="registerForm.password"
                :label="$t('password')"
                :name="$t('password')"
                :prepend-icon="icons.mdiLock"
              ></v-text-field>

              <div class="text-center">
                <v-btn to="login" class="overline" rounded small text>
                  {{ $t("already-registered") }}
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
                >{{ $t("register") }}</v-btn
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
  name: "TheSignUp",
  data: function() {
    return {
      loading: false,
      showPassword: false,
      registerForm: {
        email: "",
        password: ""
      },
      icons: {
        mdiEmail,
        mdiLock,
        mdiEye,
        mdiEyeOff
      },
      emailRules: [
        v => !!v || this.$i18n.t("email-is-required"),
        v => /.+@.+\..+/.test(v) || this.$i18n.t("email-must-be-valid")
      ],
      passwordRules: [
        v =>
          (v || "").length <= 24 ||
          this.$i18n.t("a-maximum-of-24-characters-is-allowed"),
        v =>
          (v || "").length >= 6 ||
          this.$i18n.t("a-minimum-of-6-characters-is-allowed"),
        v => (v || "").indexOf(" ") < 0 || this.$i18n.t("no-spaces-are-allowed")
      ]
    };
  },
  methods: {
    async onSignUp() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          // await this.$store.dispatch("signUp", this.registerForm);
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
