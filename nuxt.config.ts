// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [
    "plugins/fontawesome.ts",
    "plugins/radialColorPickerPlugin.ts",
    "plugins/i18n.ts",
  ],
  modules: ["@pinia/nuxt", "nuxt-svgo"],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "assets",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      script: [],
      style: [],
      link: [],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/scss/main.scss",
  ],
  ssr: false,
});
