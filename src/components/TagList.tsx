import { Hash } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function TagList({ tags }: { tags: { name: string; count: number }[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-3 px-4 py-6 sm:px-6">
      {tags.map(({ name, count }) => (
        <li key={name} className="max-w-full min-w-0">
          <Badge
            variant="outline"
            render={
              <a href={`/tags/${encodeURIComponent(name)}/`}>
                <Hash
                  size={14}
                  strokeWidth={1.5}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="min-w-0 wrap-anywhere whitespace-normal">{name}</span>
                <span className="shrink-0 font-mono text-xs leading-5 text-muted-foreground">
                  {count}
                  <span className="sr-only"> 篇文章</span>
                </span>
              </a>
            }
            className="min-h-9 h-auto max-w-full gap-2 rounded-md px-3 py-2 font-mono text-sm font-normal no-underline hover:bg-hover pointer-coarse:min-h-11"
          />
        </li>
      ))}
    </ul>
  )
}
