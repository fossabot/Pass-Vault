<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                rounded
                outlined
                dense
                label="Email"
                name="Email"
                v-model="email"
                :prepend-icon="icons.mdiAccount"
                type="text"
              ></v-text-field>

              <v-text-field
                rounded
                outlined
                dense
                label="Password"
                name="password"
                v-model="password"
                :prepend-icon="icons.mdiLock"
                type="password"
              ></v-text-field>

              <v-text-field
                      rounded
                      outlined
                      dense
                      label="Confirm password"
                      name="password"
                      v-model="passwordConfirm"
                      :prepend-icon="icons.mdiLock"
                      type="password"
              ></v-text-field>

              <v-checkbox v-model="agreeTerms" dark :off-icon="icons.mdiCheckboxBlankOutline" :on-icon="icons.mdiCheckBoxOutline" label="Agree to terms of use"></v-checkbox>
            </v-form>
            <v-btn to="login" class="overline" small text>Already Registered?</v-btn>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text rounded>Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiAccount, mdiLock, mdiCheckboxBlankOutline, mdiCheckBoxOutline } from "@mdi/js";
export default {
  name: "TheSignUp",
  data: () => ({
    email: null,
    password: null,
    passwordConfirm: null,
    agreeTerms: false,
    icons: {
      mdiAccount,
      mdiLock,
      mdiCheckboxBlankOutline,
      mdiCheckBoxOutline
    }
  })
};
</script>

<style lang="scss" scoped></style>
