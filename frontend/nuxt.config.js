require('dotenv').config()
const { API_URL } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'りょうたろうのノート。',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // bootstrap
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      },
    ],
    script: [
      // bootstrap
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", type: "text/javascript"
      }
    ]
  },

  loading: { color: "#fff" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],

  router: {
    middleware: ["clearValidationErrors"]
  },

  transition : {
    name: 'fade',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/mixins/user.js",
    "./plugins/axios.js",
    "./plugins/mixins/validation.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    // Simple usage
    '@nuxtjs/vuetify',
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  watchers: {
    webpack: {
      poll: true,
    },
  },
  
  env: {
    API_URL,
    // API_URL_BROWSER
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: process.env.API_URL,
    // browserBaseURL: process.env.API_URL_BROWSER
  },

  // proxy: {
  //   '/': process.env.API_URL,
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "http://localhost:18080/api/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "http://localhost:18080/api/user",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "http://localhost:18080/api/logout",
            method: "post"
          }
        }
      }
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {}
  }
}
