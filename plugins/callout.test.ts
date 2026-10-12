import assert from "node:assert/strict"
import test from "node:test"

import { markdownToHtml } from "satteri"

import calloutPlugin from "./mdast-callout.ts"

const render = (markdown: string) =>
  // Styling classes are checked in the browser; test the semantic HTML contract here.
  markdownToHtml(markdown, { mdastPlugins: [calloutPlugin] }).html.replace(/ class="[^"]*"/g, "")

test("renders all five callout types without extra visible titles or wrappers", () => {
  const types = [
    ["NOTE", "note", "提示"],
    ["TIP", "tip", "建议"],
    ["IMPORTANT", "important", "重要"],
    ["WARNING", "warning", "警告"],
    ["CAUTION", "caution", "注意"],
  ]

  for (const [marker, type, title] of types) {
    const html = render(`> [!${marker}]\n> 保留说明内容。`)

    assert.match(
      html,
      new RegExp(
        `^<aside[^>]*data-callout="${type}"[^>]*aria-label="${title}"[^>]*>\\s*<p>保留说明内容。</p>\\s*</aside>\\s*$`,
      ),
    )
    assert.doesNotMatch(html, /\[!|<blockquote>|role="(?:alert|status)"/, marker)
  }
})

test("preserves every line whether the marker is separate or shares the first line", () => {
  const sources = [
    "> [!NOTE]\n> 第一行\n> 第二行\n> 第三行",
    "> [!note] 第一行\n> 第二行\n> 第三行",
  ]

  for (const source of sources) {
    const html = render(source)

    assert.match(html, /<aside[^>]*data-callout="note"/)
    assert.match(html, /<p>第一行\s+第二行\s+第三行<\/p>/)
    assert.doesNotMatch(html, /\[!/)
  }
})

test("preserves multiple paragraphs and inline Markdown after removing the marker", () => {
  const html = render(
    [
      "> [!TIP] **先检查配置**，再阅读 [文档](https://example.com/docs)。",
      ">",
      "> 第二段保留 `const value = 1` 和 *强调*。",
    ].join("\n"),
  )

  assert.match(html, /<aside[^>]*data-callout="tip"/)
  assert.match(
    html,
    /<p><strong>先检查配置<\/strong>，再阅读 <a href="https:\/\/example.com\/docs">文档<\/a>。<\/p>/,
  )
  assert.match(html, /<p>第二段保留 <code>const value = 1<\/code> 和 <em>强调<\/em>。<\/p>/)
  assert.doesNotMatch(html, /\[!/)
})

test("renders inline code as the first content in a callout", () => {
  const html = render("> [!IMPORTANT] `npm run build` 后继续。")

  assert.match(html, /<aside[^>]*data-callout="important"/)
  assert.match(html, /<aside[^>]*>\s*<p><code>npm run build<\/code> 后继续。<\/p>/)
  assert.doesNotMatch(html, /\[!/)
})

test("renders nested callouts while preserving the outer content on both sides", () => {
  const html = render(
    ["> [!CAUTION] 外层开头。", ">", "> > [!IMPORTANT] **内层说明。**", ">", "> 外层结尾。"].join(
      "\n",
    ),
  )

  assert.match(
    html,
    /<aside[^>]*data-callout="caution"[^>]*>\s*<p>外层开头。<\/p>\s*<aside[^>]*data-callout="important"[^>]*>\s*<p><strong>内层说明。<\/strong><\/p>\s*<\/aside>\s*<p>外层结尾。<\/p>\s*<\/aside>/,
  )
  assert.equal((html.match(/data-callout=/g) ?? []).length, 2)
  assert.doesNotMatch(html, /\[!|<blockquote>/)
})

test("leaves ordinary quotations, unknown markers, and markers inside text unchanged", () => {
  const sources = [
    "> 普通引用，保留 **原文格式**。\n> 第二行。",
    "> [!CUSTOM] 自定义标记不会转成 callout。",
    "> 这句话中的 [!NOTE] 只是正文。",
  ]

  for (const source of sources) {
    const html = render(source)

    assert.equal(html, markdownToHtml(source).html)
    assert.match(html, /<blockquote>/)
    assert.doesNotMatch(html, /data-callout=/)
  }
})

test("does not leave an empty paragraph when the marker is the whole first paragraph", () => {
  const html = render("> [!NOTE]\n>\n> 独立的正文段落。")

  assert.match(html, /<aside[^>]*>\s*<p>独立的正文段落。<\/p>\s*<\/aside>/)
  assert.doesNotMatch(html, /<p>\s*<\/p>/)
})

test("preserves lists, fenced code and ordinary quotations inside the callout", () => {
  const html = render(
    [
      "> [!WARNING] 操作顺序：",
      ">",
      "> - 检查配置",
      "> - 运行命令",
      ">",
      "> ```ts",
      "> const value = 1",
      "> ```",
      ">",
      "> > 保留普通引用。",
    ].join("\n"),
  )

  assert.match(html, /<aside[^>]*>\s*<p>操作顺序：<\/p>/)
  assert.match(html, /<ul>[\s\S]*<li>检查配置<\/li>[\s\S]*<li>运行命令<\/li>[\s\S]*<\/ul>/)
  assert.match(html, /<pre><code[^>]*>const value = 1\s*<\/code><\/pre>/)
  assert.match(html, /<blockquote>\s*<p>保留普通引用。<\/p>\s*<\/blockquote>/)
  assert.equal((html.match(/data-callout=/g) ?? []).length, 1)
})
