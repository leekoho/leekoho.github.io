import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--ui-text-secondary)",
            "--tw-prose-headings": "var(--ui-text)",
            "--tw-prose-links": "var(--ui-text)",
            "--tw-prose-bold": "var(--ui-text)",
            "--tw-prose-counters": "var(--ui-text-muted)",
            "--tw-prose-bullets": "var(--ui-text-muted)",
            "--tw-prose-hr": "var(--ui-border)",
            "--tw-prose-quotes": "var(--ui-text-secondary)",
            "--tw-prose-quote-borders": "var(--ui-border)",
            "--tw-prose-captions": "var(--ui-text-muted)",
            "--tw-prose-kbd": "var(--ui-text)",
            "--tw-prose-code": "var(--ui-text)",
            "--tw-prose-pre-code": "var(--ui-text)",
            "--tw-prose-pre-bg": "var(--ui-bg-soft)",
            "--tw-prose-th-borders": "var(--ui-border)",
            "--tw-prose-td-borders": "var(--ui-border)",
          },
        },
      },
    },
  },
}

export default config
