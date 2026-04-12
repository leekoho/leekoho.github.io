import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    password: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  posts,
}
