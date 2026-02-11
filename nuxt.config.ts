import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [
      // @ts-expect-error vuetify vite plugin type mismatch
      vuetify({ autoImport: true })
    ],
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost/api'
    }
  }
})
