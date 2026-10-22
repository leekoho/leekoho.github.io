import { defineHastPlugin, type HastNode } from "satteri"

const textContent = (node: HastNode): string =>
  node.type === "text"
    ? node.value
    : "children" in node
      ? node.children.map(textContent).join("")
      : ""

// Pass source and metadata to the client component; it highlights the code there.
export default defineHastPlugin({
  name: "article-code-block",
  element: {
    filter: ["pre"],
    visit(node, ctx) {
      const code = node.children.find(
        (child) => child.type === "element" && child.tagName === "code",
      )
      if (!code || code.type !== "element") return

      const source = textContent(code)
      const payload = {
        code: source,
        language: String(
          node.properties.dataLanguage ?? node.properties["data-language"] ?? "text",
        ),
        title: node.properties["data-title"],
      }
      ctx.setProperty(node, "data-code-block", JSON.stringify(payload))
    },
  },
})
