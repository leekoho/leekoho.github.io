import { defineMdastPlugin } from "satteri"

const calloutPlugin = defineMdastPlugin({
  name: "callout",
  blockquote(node, ctx) {
    const paragraph = node.children[0]
    if (paragraph?.type !== "paragraph") return

    const text = paragraph.children[0]
    if (text?.type !== "text") return

    const marker = text.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)][ \t]*(?:\r?\n)?/i)
    if (!marker) return

    const content = text.value.slice(marker[0].length)
    if (content) {
      ctx.setProperty(text, "value", content)
    } else {
      ctx.removeChildAt(paragraph, 0)
    }

    ctx.setProperty(node, "data", {
      ...node.data,
      hName: "callout",
      hProperties: {
        type: marker[1].toLowerCase(),
      },
    })
  },
})

export default calloutPlugin
