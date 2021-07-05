<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" />

      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn depressed color="error" @click="handleLogout"> Logout </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Content',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Notification',
          to: '/notification',
        },
        {
          icon: 'mdi-file-document-edit-outline',
          title: 'Contract',
          to: '/contract',
        },
      ],
      miniVariant: true,
      title: 'CMS มังกรฟ้า มหานคร',
    }
  },
  methods: {
    handleLogout() {
      this.$fire.auth.signOut().then(() => {
        this.$cookies.removeAll()
        this.$router.push({
          path: `/login`,
        })
        console.log('User signed out!')
      })
    },
  },
}
</script>
