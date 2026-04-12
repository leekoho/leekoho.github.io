import type { Blockquote, Root, Text } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

const remarkCallout: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const firstChild = node.children[0]

      if (firstChild?.type === "paragraph") {
        const textNode = firstChild.children[0] as Text

        if (textNode?.type === "text") {
          const match = textNode.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)]\s*(.*)/i)

          if (match) {
            const type = match[1].toLowerCase()
            const firstLineRest = match[2]

            if (firstLineRest) {
              textNode.value = firstLineRest
            } else {
              firstChild.children.shift()
            }

            node.data = {
              hName: "callout",
              hProperties: {
                type,
              },
            }
          }
        }
      }
    })
  }
}

export default remarkCallout
