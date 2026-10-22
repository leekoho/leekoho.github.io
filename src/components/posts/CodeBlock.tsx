import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"

export interface ArticleCodeProps {
  code: string
  language: string
  title?: string
}

export default function ArticleCodeBlock({ code, language, title }: ArticleCodeProps) {
  const lines = useHighlightedCode(code, language)
  const copy = (
    <CodeBlockCopyButton value={code} className="pointer-coarse:min-h-11 pointer-coarse:min-w-11" />
  )

  return (
    <CodeBlock className="my-6 max-w-full">
      {title ? (
        <CodeBlockHeader>
          <CodeBlockTitle>{title}</CodeBlockTitle>
          <CodeBlockActions>{copy}</CodeBlockActions>
        </CodeBlockHeader>
      ) : (
        <CodeBlockActions>{copy}</CodeBlockActions>
      )}
      <CodeBlockContent lineNumbers>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
