require('dotenv').config()
const { API_URL } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'taroブログ',
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
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' }
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css'
  ],

  router: {
    middleware: ["clearValidationErrors"]
  },

  transition : {
    name: 'fade',
    mode: 'out-in'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/scrollto.js",
            {src: "@/plugins/vueselect.js", ssr: false},
            "./plugins/axios.js",
            "./plugins/validation.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv',
    // '@nuxtjs/auth-next',
    '@nuxtjs/auth',
  ],

  env: {
    API_URL,
  },

  axios: {
    baseURL: process.env.API_URL,
    // proxy: true,
    // baseURL: "http://web:80/api",
    // browserBaseURL: process.env.API_URL,
  },

  // proxy: {
  //   '/': process.env.API_URL,
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: 'meta.token',
          },
          user: {
            url: "/auth/user",
            method: "get",
            propertyName: 'data',
          },
          logout: {
            url: "/auth/logout",
            method: "post",  
          },
        },
      },
    },
  },
    // redirect: {
    //   login: '/admin/login', // 未ログイン状態でアクセスした場合のリダイレクト先
    //   logout: '/admin/login', // ログアウト後の遷移先
    //   callback: false, // コールバックルート
    //   home: '/admin', // ログイン後の遷移先
    // },
    // strategies: {
    //   local: {
    //     provider: 'laravel/jwt',
    //     url: 'http://localhost:18080',
    //     endpoints: {
    //       login: {
    //         url: '/api/auth/login',
    //         method: 'post',
    //         propertyName: 'access_token',
    //       },
    //       logout: { url: '/api/auth/login', method: 'post' },
    //       user: { url: '/api/auth/me', method: 'get', propertyName: false },
    //     },
    //     token: {
    //       property: 'access_token',
    //       maxAge: 60 * 60,
    //     },
    //     refreshToken: {
    //       property: 'access_token',
    //       maxAge: 20160 * 60,
    //     },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
