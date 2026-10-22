import { Badge } from "@/components/ui/badge"

export default function PostTags({ tags }: { tags: string[] }) {
  return (
    <ul className="article-tags" aria-label="文章标签">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            asChild
            variant="link"
            className="article-tag h-auto rounded-none border-0 p-0 font-mono font-normal text-muted-foreground"
          >
            <a href={`/tags/${encodeURIComponent(tag)}/`}>{tag}</a>
          </Badge>
        </li>
      ))}
    </ul>
  )
}
