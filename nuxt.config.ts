// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Rick and Morty",
      link: [{ rel: "icon", type: "image/png", href: "/FaviconA.png" }],
    },
  },
});
