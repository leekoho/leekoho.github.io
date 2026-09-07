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

  vite: {
    plugins: [tailwindcss()],
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
      name: "Noto Sans SC Variable",
      cssVariable: "--font-noto",
      provider: fontProviders.npm(),
      options: {
        package: "@fontsource-variable/noto-sans-sc",
        version: "5.3.0",
        file: "index.css",
      },
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
