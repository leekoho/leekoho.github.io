import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import ArticleCodeBlock from "./ArticleCodeBlock.astro"

export const articleComponents = {
  pre: ArticleCodeBlock,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  caption: TableCaption,
  // aside: ArticleCallout,
}
