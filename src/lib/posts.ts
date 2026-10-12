import { getCollection, type CollectionEntry } from "astro:content"

export type Post = CollectionEntry<"posts">

export async function getPosts(): Promise<Post[]> {
  return (
    await getCollection("posts", ({ data }) => (import.meta.env.PROD ? !data.draft : true))
  ).toSorted((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
}

export function getTags(posts: readonly Post[]) {
  const counts = new Map<string, number>()

  for (const post of posts) {
    for (const tag of new Set(post.data.tags)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return Array.from(counts, ([name, count]) => ({ name, count })).toSorted((a, b) =>
    a.name.localeCompare(b.name, "zh-CN"),
  )
}

export const getTagHref = (tag: string) => `/tags/${encodeURIComponent(tag)}/`
