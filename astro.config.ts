import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import remarkCallout from "./plugins/remark-callout"

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  site: "https://leekoho.github.io",

  integrations: [sitemap()],

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkCallout],
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    },
  },

  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
    },
  ],
})
