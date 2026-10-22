import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item"
import { SITE_DESCRIPTION } from "@/consts"
import type { PostSummary } from "@/lib/posts"

export default function PostList({
  posts,
  title = "Posts",
  description = SITE_DESCRIPTION,
}: {
  posts: PostSummary[]
  title?: string
  description?: string
}) {
  const groups = new Map<string, PostSummary[]>()
  for (const post of posts) {
    const year = post.dateTime.slice(0, 4)
    groups.set(year, [...(groups.get(year) ?? []), post])
  }
  return (
    <div className="min-w-0">
      <header className="page-heading page-rule">
        <h1 className="section-title">{title}</h1>
        <p className="section-summary">{description}</p>
      </header>
      <div className="section-divider page-rule" aria-hidden="true" />
      <section aria-labelledby="archive-title">
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <h2 className="text-lg font-medium tracking-wide" id="archive-title">
            Archive
          </h2>
        </div>
        {Array.from(groups, ([year, yearPosts]) => (
          <section key={year} aria-labelledby={`post-year-${year}`}>
            <h3 className="relative bg-background-muted px-4 py-2 font-mono text-xs leading-6 tracking-wide text-muted-foreground sm:px-6 before:pointer-events-none before:absolute before:-top-px before:left-1/2 before:h-px before:w-screen before:-translate-x-1/2 before:bg-border before:content-[''] page-rule" id={`post-year-${year}`}>
              {year}
            </h3>
            <ul className="m-0 list-none p-0">
              {yearPosts.map((post, index) => (
                <li key={post.id} className={index === yearPosts.length - 1 ? "" : "border-b"}>
                  <Item
                    className="flex-nowrap items-start gap-3 rounded-none border-0 px-4 py-6 text-foreground no-underline hover:bg-hover focus-visible:-outline-offset-4 sm:gap-4 sm:px-6"
                    render={
                      <a href={`/posts/${post.id}`}>
                        <ItemContent className="min-w-0 flex-1 gap-0">
                          <ItemTitle className="block w-full text-base leading-7 font-medium text-pretty wrap-anywhere">{post.title}</ItemTitle>
                          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-muted-foreground">
                            <time className="font-mono tabular-nums" dateTime={post.dateTime}>
                              {post.dateTime.slice(5, 10)}
                            </time>
                            {post.tags.length > 0 && (
                              <>
                                <span className="h-3 w-px bg-border-strong" aria-hidden="true" />
                                <div className="flex flex-wrap gap-2 wrap-anywhere">
                                  {post.tags.map((tag, index) => (
                                    <Badge
                                      key={tag}
                                      variant="ghost"
                                      className={`h-auto rounded-none border-0 p-0 font-normal text-muted-foreground hover:bg-transparent ${index > 0 ? "before:mr-2 before:content-['·']" : ""}`}
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </ItemContent>
                          <ItemActions className="flex w-4 shrink-0 justify-end pt-1.5 text-muted-foreground" aria-hidden="true">
                          <ArrowUpRight className="size-4 stroke-1" />
                        </ItemActions>
                      </a>
                    }
                  ></Item>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </div>
  )
}
