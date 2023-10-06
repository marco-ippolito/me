// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [400, 700],
        },
      },
    ],
    "@nuxt/image",
  ],
  css: [
    "@unocss/reset/normalize.css",
    "@unocss/reset/eric-meyer.css",
    "~/assets/css/main.css",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "en" },
    },
  },
  build: {
    extractCSS: {
      allChunks: true,
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    }
  }
});
