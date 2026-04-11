import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
import type { PluginUtils } from "tailwindcss/plugin"

const config: Config = {
  theme: {
    extend: {
      colors: {
        foreground: "var(--color-foreground)",
        "foreground-soft": "var(--color-foreground-soft)",
        subtle: "var(--color-subtle)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },

      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-foreground-soft)",
            "--tw-prose-headings": "var(--color-foreground)",
            "--tw-prose-links": "var(--color-foreground)",
            "--tw-prose-bold": "var(--color-foreground)",
            "--tw-prose-counters": "var(--color-foreground)",
            "--tw-prose-bullets": `var(--color-foreground)`,
            "--tw-prose-hr": "var(--color-border)",
            "--tw-prose-quotes": "var(--color-foreground)",
            "--tw-prose-captions": "var(--color-muted)",
            "--tw-prose-code": "var(--color-foreground)",
            "--tw-prose-th-borders": "var(--color-border)",
            "--tw-prose-td-borders": "var(--color-border)",

            "h1, h2, h3": {
              letterSpacing: theme("letterSpacing.tight"),
            },
            a: {
              textDecorationColor: `var(--color-accent-strong)`,
              fontWeight: theme("fontWeight.medium"),
              "&:hover": {
                textDecorationColor: "var(--color-accent)",
              },
            },
            blockquote: {
              fontStyle: theme("fontStyle.normal"),
              fontWeight: theme("fontWeight.normal"),
            },
            code: {
              paddingInline: theme("size.1"),
              paddingBlock: "2px",
              fontWeight: theme("fontWeight.medium"),
              borderRadius: theme("borderRadius.sm"),
              color: "var(--color-foreground)",
              backgroundColor: "var(--color-border)",
              // "&::before": { content: '""!important' },
              "&::before": { display: "none" },
              "&::after": { display: "none" },
            },
            pre: {
              borderRadius: theme("borderRadius.xl"),
            },
            mark: {
              backgroundColor: "var(--color-accent)",
            },
          },
        },
        invert: {
          css: {
            // "--tw-prose-bullets": `color-mix(in srgb, var(--color-foreground) 20%, transparent)`,
            // "--tw-prose-quote-borders": `color-mix(in srgb, var(--color-accent) 28%, black)`,
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
