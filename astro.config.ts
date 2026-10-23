import { satteri } from "@astrojs/markdown-satteri"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import codeBlockPlugin from "./plugins/hast-code-block"
import calloutPlugin from "./plugins/mdast-callout"

import cloudflare from "@astrojs/cloudflare"

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  site: "https://leekoho.com",

  output: "server",

  adapter: cloudflare(),

  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => new URL(page).pathname !== "/",
    }),
  ],

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
    processor: satteri({
      mdastPlugins: [calloutPlugin],
      hastPlugins: [codeBlockPlugin],
    }),
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      transformers: [
        {
          pre(node) {
            const title = this.options.meta?.__raw?.match(/\btitle=["']([^"']+)["']/)?.[1]
            if (title) node.properties["data-title"] = title
          },
        },
      ],
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
