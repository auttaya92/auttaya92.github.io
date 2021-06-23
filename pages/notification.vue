<template>
  <div>
    <H1>Push Notification</H1>
    <v-row>
      <v-col class="text-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            :counter="50"
            :rules="titleRules"
            label="Notification title"
            required
          ></v-text-field>

          <v-text-field
            v-model="text"
            :rules="textRules"
            label="Notification text"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            block
          >
            send notification
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      top
      color="success"
      outlined
      right
    >
      {{ messages }}
      <template v-slot:action="{ attrs }">
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
          app_id: '618fe922-7c23-4ad6-a7c1-1bf1131f1cb2',
          included_segments: ['Active Users', 'Inactive Users'],
          headings: {
            en: this.title,
          },
          contents: {
            en: this.text,
          },
        }

        const response = await this.$axios.post(
          'https://onesignal.com/api/v1/notifications',
          data,
          {
            headers: {
              Authorization:
                'Basic Y2JlODI0MDItNWZmZS00ODA1LWE5MmMtMjQyZGRiMjMwNzQ3',
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
