<template lang="html">
  <div>
    <H1>EDIT CONTRACT</H1>

    <div>
      <v-row no-gutters>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">Line Official (Line OA)</div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2">
            <v-text-field
              outlined
              v-model="lineOA"
              hint="www.example.com/page"
              :disabled="disableLineOA"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">
            <v-btn depressed color="error" @click="toggleTextfield('LINEOA')">
              แก้ไข
            </v-btn>
            <v-btn
              depressed
              color="primary"
              @click="saveDataFirebase('LINEOA')"
            >
              บันทึก
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">Line</div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2">
            <v-text-field
              outlined
              v-model="personalLine"
              hint="example"
              :disabled="disablePersonalLine"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">
            <v-btn depressed color="error" @click="toggleTextfield('LINE')">
              แก้ไข
            </v-btn>
            <v-btn depressed color="primary" @click="saveDataFirebase('LINE')">
              บันทึก
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">Phone Number</div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2">
            <v-text-field
              outlined
              v-model="phone"
              hint="0987654321"
              :disabled="disablePhone"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="pa-2 mt-2">
            <v-btn depressed color="error" @click="toggleTextfield('PHONE')">
              แก้ไข
            </v-btn>
            <v-btn depressed color="primary" @click="saveDataFirebase('PHONE')">
              บันทึก
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      top
      color="success"
      outlined
      right
    >
      {{ text }}
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
      lineOA: '',
      disableLineOA: true,
      personalLine: '',
      disablePersonalLine: true,
      phone: '',
      disablePhone: true,
      snackbar: false,
      text: 'save contracts success',
      timeout: 2000,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    toggleTextfield(value) {
      if (value === 'LINEOA') {
        this.disableLineOA = !this.disableLineOA
      } else if (value === 'LINE') {
        this.disablePersonalLine = !this.disablePersonalLine
      } else if (value === 'PHONE') {
        this.disablePhone = !this.disablePhone
      }
    },
    async saveDataFirebase(value) {
      await this.$fire.database
        .ref('contract/')
        .set({
          lineOA: this.lineOA,
          personalLine: this.personalLine,
          phone: this.phone,
        })
        .catch((error) => console.log(error.code, error.message))
      this.snackbar = true
      this.toggleTextfield(value)
      this.getData()
    },
    async getData() {
      const self = this
      await this.$fire.database
        .ref('contract/')
        .once('value', function (snapshot) {
          console.log(snapshot.val())
          const data = snapshot.val()
          console.log(data)
          self.lineOA = data.lineOA
          self.personalLine = data.personalLine
          self.phone = data.phone
        })
        .catch((error) => console.log(error.message))
    },
  },
}
</script>

<style lang="css" scoped></style>
