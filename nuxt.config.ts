// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // add script tag of lottie files to head
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  modules: ["nuxt-headlessui", "@nuxtjs/robots"],
  robots: {
    UserAgent: "*",
    Disallow: "/",
  },

  headlessui: {
    prefix: "Headless",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "SendIt",
      meta: [{ name: "description", content: "We order, collect and deliver" }],
      script: [
        {
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
          body: true,
        },
      ],
    },
  },
});
