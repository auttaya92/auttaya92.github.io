<template>
  <div>
    <H1>PUSH NOTIFICATION</H1>
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
            block
            @click="validate"
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
      fcmtoken: [],
      titleRules: [
        (v) => !!v || 'title is required',
        (v) => (v && v.length <= 50) || 'Title must be less than 50 characters',
      ],
      text: '',
      textRules: [(v) => !!v || ' text is required'],
      snackbar: false,
      messages: 'push notification success',
      timeout: 2000,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendingNotification();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async sendingNotification() {
      try {
        const data = {
          registration_ids: this.fcmtoken,
          notification: {
            title: this.title,
            body: this.text,
            sound: 'default',
            click_action: 'FCM_PLUGIN_ACTIVITY',
            icon: 'fcm_push_icon',
          },
        };

        const response = await this.$axios.post(
          'https://fcm.googleapis.com/fcm/send',
          data,
          {
            headers: {
              Authorization:
                'key=AAAApnkduNc:APA91bGNtQAb0myOlnOmSZ3RiFoQutOXuosspsS_KWPMjljaSjUUgMJZ48imiw_pfsMpyR6rR9J27jVS02O7rnWs7Bc1juHIEU95p9xogaFRAzwBG09W6b_WnIryMm2KjvPSnxo2Juz2',
            },
          }
        );
        console.warn('response', response);
        if (response.status === 200) {
          this.snackbar = true;
          this.$refs.form.reset();
        }
      } catch (e) {
        console.log('error', e);
      }
    },
    async getData() {
      const self = this;
      const getcontents = await this.$fire.database
        .ref('notification/')
        .once('value', function (snapshot) {
          console.log(snapshot.val());
          const data = snapshot.val();
          const itemData = Object.values(data);
          const fcmtoken = [];
          itemData.map((data) => fcmtoken.push(data.fcm));
          self.fcmtoken = fcmtoken;
        })
        .catch((error) => console.log(error.message));
      console.log('getcontents', getcontents);
    },
  },
};
</script>
