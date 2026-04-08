import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  site: "https://leekoho.com",

  prefetch: true,

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
})
