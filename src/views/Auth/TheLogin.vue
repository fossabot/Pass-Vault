<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Sign In</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                rounded
                outlined
                dense
                label="Login"
                name="login"
                :prepend-icon="icons.mdiAccount"
                type="text"
              ></v-text-field>

              <v-text-field
                rounded
                outlined
                dense
                id="password"
                label="Password"
                name="password"
                :prepend-icon="icons.mdiLock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text rounded>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiAccount, mdiLock } from "@mdi/js";
export default {
  name: "TheLogin",
  data: () => ({
    icons: {
      mdiAccount,
      mdiLock
    }
  })
};
</script>

<style lang="scss" scoped></style>
