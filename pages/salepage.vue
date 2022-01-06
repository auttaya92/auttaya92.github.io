<template lang="html">
  <div>
    <H1></H1>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.page">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentBlueGragon" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('blue_dragon')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentHowtobuy" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('howtobuy')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentHowtoLogin" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('howtologin')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentAbout" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('about')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentGiftAway" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('giftaway')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentDealer" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('dealer')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="ma-5" color="basil" flat>
          <quill-editor v-model="contentClaimReward" :options="editorOption" />
          <v-btn
            class="mt-5"
            color="success"
            block
            @click="saveDataFirebase('claimreward')"
          >
            บันทึก
          </v-btn>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
  data() {
    return {
      tab: null,
      items: [
        {
          tab: 'มังกรฟ้า',
          page: 'blue_dragon',
        },
        {
          tab: 'ขั้นตอนการซื้อหวย',
          page: 'howtobuy',
        },
        {
          tab: 'วิธีเข้าสู่ระบบ',
          page: 'howtologin',
        },
        {
          tab: 'ทำไมต้อง มังกรฟ้า',
          page: 'about',
        },
        {
          tab: 'ยิ่งซื้อยิ่งให้',
          page: 'giftaway',
        },
        {
          tab: 'ตัวแทนมังกรฟ้า',
          page: 'dealer',
        },
        {
          tab: 'มังกรฟ้าวิธีขึ้นรางวัล',
          page: 'claimreward',
        },
      ],
      contentBlueGragon: '',
      contentHowtobuy: '',
      contentHowtoLogin: '',
      contentAbout: '',
      contentGiftAway: '',
      contentDealer: '',
      contentClaimReward: '',
      editorOption: {
        // Some Quill options...
      },
      snackbar: false,
      text: 'save contents sale page success',
      timeout: 2000,
    };
  },
  mounted() {
    this.getData();
  },
  updated() {
    console.warn('tab', this.tab);
  },
  methods: {
    async saveDataFirebase(page) {
      await this.$fire.database
        .ref('salepage/' + page)
        .set({
          content:
            page === 'blue_dragon'
              ? this.contentBlueGragon
              : page === 'howtobuy'
              ? this.contentHowtobuy
              : page === 'howtologin'
              ? this.contentHowtoLogin
              : page === 'about'
              ? this.contentAbout
              : page === 'giftaway'
              ? this.contentGiftAway
              : page === 'dealer'
              ? this.contentDealer
              : page === 'claimreward'
              ? this.contentClaimReward
              : '',
        })
        .catch((error) => console.log(error.code, error.message));
      this.snackbar = true;
      this.getData();
    },
    async getData() {
      const self = this;
      await this.$fire.database
        .ref('salepage/')
        .once('value', function (snapshot) {
          const data = snapshot.val();
          console.log('data', data);

          self.contentBlueGragon = data.blue_dragon
            ? data.blue_dragon.content
            : '<p>I am Example</p>';
          self.contentHowtobuy = data.howtobuy
            ? data.howtobuy.content
            : '<p>I am Example</p>';
          self.contentHowtoLogin = data.howtologin
            ? data.howtologin.content
            : '<p>I am Example</p>';
          self.contentAbout = data.about
            ? data.about.content
            : '<p>I am Example</p>';
          self.contentGiftAway = data.giftaway
            ? data.giftaway.content
            : '<p>I am Example</p>';
          self.contentDealer = data.dealer
            ? data.dealer.content
            : '<p>I am Example</p>';
          self.contentClaimReward = data.claimreward
            ? data.claimreward.content
            : '<p>I am Example</p>';
        })
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style lang="css" scoped></style>
