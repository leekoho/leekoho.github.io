import { CircleX, Info, Lightbulb, ShieldAlert, TriangleAlert } from "lucide-react"
import type { ComponentProps } from "react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

import ArticleCodeBlock from "./CodeBlock.astro"

function ArticleTable({ className, ...props }: ComponentProps<"table">) {
  return <Table className={cn("article-table", className)} {...props} />
}

function ArticleRule(props: ComponentProps<typeof Separator>) {
  return <Separator className="my-8" {...props} />
}

const callouts = {
  note: { variant: "default", icon: Info, color: "border-info/30 bg-info/4 [&>svg]:text-info" },
  tip: {
    variant: "default",
    icon: Lightbulb,
    color: "border-success/30 bg-success/4 [&>svg]:text-success",
  },
  important: { variant: "default", icon: ShieldAlert, color: "" },
  warning: {
    variant: "default",
    icon: TriangleAlert,
    color: "border-warning/30 bg-warning/4 [&>svg]:text-warning",
  },
  caution: { variant: "destructive", icon: CircleX, color: "border-destructive/30" },
} as const

function ArticleCallout({
  children,
  className,
  ...props
}: ComponentProps<"div"> & { "data-callout"?: string }) {
  const appearance = callouts[props["data-callout"] as keyof typeof callouts] ?? callouts.note
  const Icon = appearance.icon
  return (
    <Alert
      {...props}
      variant={appearance.variant}
      role="note"
      className={cn("callout my-6 min-w-0 items-start p-4", appearance.color, className)}
    >
      <Icon className="mt-1 size-4" strokeWidth={1.5} aria-hidden="true" />
      <AlertDescription className="block min-w-0 text-sm leading-7 text-foreground-soft [&_p]:my-0 [&_p+p]:mt-4">
        {children}
      </AlertDescription>
    </Alert>
  )
}

// Headings, links, lists and quotations use shadcn typography through prose.css.
// Only the code block hydrates; the other mapped components render static HTML.
export const articleComponents = {
  pre: ArticleCodeBlock,
  table: ArticleTable,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  caption: TableCaption,
  hr: ArticleRule,
  aside: ArticleCallout,
}
