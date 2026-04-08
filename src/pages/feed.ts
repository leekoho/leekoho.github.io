import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getCollection } from "astro:content"

import { PROFILE, SITE_DESCRIPTION, SITE_TITLE } from "@/consts"

export async function GET(context: APIContext) {
  const site = context.site ?? ""
  const feedUrl = new URL(context.url.pathname, site).toString()

  const posts = await getCollection("posts")

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: [
      "<language>zh-cn</language>",
      `<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />`,
      `<copyright>${new Date().getFullYear()} ${PROFILE.name}</copyright>`,
    ].join(""),
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  })
}
