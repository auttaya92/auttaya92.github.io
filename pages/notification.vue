<template>
<div>
  <H1>PUSH NOTIFICATION</H1>
  <v-row>
    <v-col class="text-center">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="title" :counter="50" :rules="titleRules" label="Notification title" required></v-text-field>

        <v-text-field v-model="text" :rules="textRules" label="Notification text" required></v-text-field>

        <v-btn :disabled="!valid" color="success" class="mr-4" block @click="validate">
          send notification
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
  <v-snackbar v-model="snackbar" :timeout="timeout" absolute top color="success" outlined right>
    {{ messages }}
    <template #action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</div>
</template>
<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      valid: true,
      title: '',
      titleRules: [
        (v) => !!v || 'title is required',
        (v) => (v && v.length <= 50) || 'Title must be less than 50 characters',
      ],
      text: '',
      textRules: [(v) => !!v || ' text is required'],
      snackbar: false,
      messages: 'push notification success',
      timeout: 2000,
    }
  },
  mounted() {},
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendingNotification()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async sendingNotification() {
      try {
        const data = {
          registration_ids: ["fLU1Xk-ZSySs1bYr53Ku-J:APA91bECGKR0jG-m2Ub1Ap1bfgLCnw0yJltIpG2yv_ffcBTbq03Ak0m7eAOD5LjCbFGnbUibGC_kxoMWap8OzAp7czs3XcsuylTNqnNpSIDAPsbvDrkaROm8eTdwN5fW3Wku_TFEtW9O",
            "dKpPehEyK0xFuZGvoeB_k9:APA91bF-2miDd1He_BC0XUDyBW-JmG8ftnwP5eaeoj1hrVBCiLysgcQEdx_DGdMmT1iuRbsp6PydPSOu0n9RzUPGMSF25ey3wSWuEuhih71dMcYRqQiCRt3q5hIomk2x1TUcRbnqLRwt"
          ],
          notification: {
            title: "สวัสดีจ้าาา titlessก5d",
            body: "555+ bodsdsady",
            sound: "default",
            click_action: "FCM_PLUGIN_ACTIVITY",
            icon: "fcm_push_icon"
          },
        }

        const response = await this.$axios.post(
          'https://fcm.googleapis.com/fcm/send',
          data, {
            headers: {
              Authorization: "key=AAAAxEXkkNg:APA91bGyInwTvFrYQdAce5c9voBGSnsXECgsCs9ErX3R4iy-dipqO6axrYSDKWWHBRcz3wqtHFk40HmZfFE1F4KcS2NfQTEKnL7oun1WRW7AtcGMVKB-EEO3wOKs48SGv8KWDdRBziwT",
            },
          }
        )
        console.warn('response', response)
        if (response.status === 200) {
          this.snackbar = true
          this.$refs.form.reset()
        }
      } catch (e) {
        console.log('error', e)
      }
    },
  },
}
</script>
