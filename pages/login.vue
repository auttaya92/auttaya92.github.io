<template lang="html">
  <div id="loginpage">
    <v-app id="login">
      <v-app id="login">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>มังกรฟ้ามหานคร Login form</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="email"
                        label="Login"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn block color="primary" @click="handleLogin"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
        if (response.user) {
          this.$cookies.set('uid', response.user.uid)
          this.$router.push({
            path: `/`,
          })
        }
        console.warn('response', response)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
