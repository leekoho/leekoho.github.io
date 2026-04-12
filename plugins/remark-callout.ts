import { visit } from "unist-util-visit"

export default function remarkCallout() {
  return (tree: any) => {
    visit(tree, "blockquote", (node: any) => {
      const firstChild = node.children[0]
      if (firstChild?.type === "paragraph") {
        const textNode = firstChild.children[0]
        if (textNode?.type === "text") {
          const match = textNode.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)]\s*(.*)/i)
          if (match) {
            const type = match[1].toLowerCase()
            const firstLineRest = match[2]

            // Remove the [!TYPE] marker from the text
            if (firstLineRest) {
              textNode.value = firstLineRest
            } else {
              firstChild.children.shift()
            }

            // Transform blockquote into a custom 'callout' node
            node.type = "paragraph"
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
