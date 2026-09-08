import { satteri } from "@astrojs/markdown-satteri"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import calloutPlugin from "./plugins/remark-callout"

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  site: "https://leekoho.github.io",

  integrations: [sitemap()],

  build: {
    inlineStylesheets: "never",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep font bytes out of CSS so local PingFang can avoid CJK font downloads.
      assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf)$/i.test(filePath) ? false : undefined),
    },
  },

  markdown: {
    processor: satteri({ mdastPlugins: [calloutPlugin] }),
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
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.google(),
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: [],
      optimizedFallbacks: false,
      display: "swap",
    },
    {
      name: "Geist Mono",
      cssVariable: "--font-code",
      provider: fontProviders.google(),
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: [],
      optimizedFallbacks: false,
      display: "swap",
    },
  ],
})
