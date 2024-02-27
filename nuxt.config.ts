// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  plugins: [
    "plugins/fontawesome.ts",
    "plugins/radialColorPickerPlugin.ts"
  ],
  modules: ["@pinia/nuxt", "nuxt-svgo"],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  components: [
    '~/components',
    '~/components/Buttons',
    '~/components/Images',
    '~/components/Texts',
    '~/components/Svgs',
  ],
  app: {
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
      noscript: [
        { children: "Javascript is required" },
      ],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/scss/main.scss",
  ],
  ssr: false,
});
