import { defineMdastPlugin } from "satteri"

const callouts = {
  NOTE: { type: "note", title: "提示" },
  TIP: { type: "tip", title: "建议" },
  IMPORTANT: { type: "important", title: "重要" },
  WARNING: { type: "warning", title: "警告" },
  CAUTION: { type: "caution", title: "注意" },
} as const

const calloutPlugin = defineMdastPlugin({
  name: "callout",
  blockquote(node, ctx) {
    const paragraph = node.children[0]
    if (paragraph?.type !== "paragraph") return

    const text = paragraph.children[0]
    if (text?.type !== "text") return

    const marker = text.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)][ \t]*(?:\r?\n)?/i)
    if (!marker) return
    const appearance = callouts[marker[1].toUpperCase() as keyof typeof callouts]

    const content = text.value.slice(marker[0].length)
    if (content) {
      ctx.setProperty(text, "value", content)
    } else if (paragraph.children.length === 1) {
      ctx.removeNode(paragraph)
    } else {
      ctx.removeChildAt(paragraph, 0)
    }

    ctx.setProperty(node, "data", {
      ...node.data,
      hName: "aside",
      hProperties: {
        className: "callout",
        "data-callout": appearance.type,
        "aria-label": appearance.title,
      },
    })
  },
})

export default calloutPlugin
