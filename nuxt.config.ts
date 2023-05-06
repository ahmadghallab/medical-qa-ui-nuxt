// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
  ],

  css: [
    '@/assets/css/main.css',
  ],

  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '',
    // Config within public will be also exposed to the client
    public: {
      apiBase: ''
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
