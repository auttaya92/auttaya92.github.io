import colors from 'vuetify/es5/util/colors';

export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms blue dragon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/nuxt-quill-plugin', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    'cookie-universal-nuxt',
  ],
  firebase: {
    config: {
      // REQUIRED: Official config for firebase.initializeApp(config):
      apiKey: 'AIzaSyD6D1SeUkhQIXpvbWNgXMxqq_8tTcm02OM',
      authDomain: 'blue-dragon-d0289.firebaseapp.com',
      databaseURL:
        'https://blue-dragon-d0289-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'blue-dragon-d0289',
      storageBucket: 'blue-dragon-d0289.appspot.com',
      messagingSenderId: '714996562135',
      appId: '1:714996562135:web:6406fa74517804ff9e1892',
      measurementId: 'G-2H8N7N7DRN',

      // apiKey: 'AIzaSyAEL2xtYYwbMXVfJdjenAz2N30wWQ1IOSg',
      // authDomain: 'bd24-server.firebaseapp.com',
      // databaseURL: 'https://bd24-server-default-rtdb.firebaseio.com',
      // projectId: 'bd24-server',
      // storageBucket: 'bd24-server.appspot.com',
      // messagingSenderId: '224656482620',
      // appId: '1:224656482620:web:3da9fdbd926aaf2a043e39',
      // measurementId: 'G-FL02Q33SSM'
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/,
      });
    },
  },
};
