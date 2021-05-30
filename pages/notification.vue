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
            Validate
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
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
    }
  },
  mounted() {},
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
