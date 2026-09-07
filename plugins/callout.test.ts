import assert from "node:assert/strict"
import test from "node:test"

import { markdownToHtml } from "satteri"

import calloutPlugin from "./remark-callout.ts"

const render = (markdown: string) =>
  markdownToHtml(markdown, { mdastPlugins: [calloutPlugin] }).html

test("renders all five callout types through the Markdown renderer", () => {
  const types = [
    ["NOTE", "note"],
    ["TIP", "tip"],
    ["IMPORTANT", "important"],
    ["WARNING", "warning"],
    ["CAUTION", "caution"],
  ]

  for (const [marker, type] of types) {
    const html = render(`> [!${marker}]\n> 保留说明内容。`)

    assert.match(
      html,
      new RegExp(`<callout type="${type}">\\s*<p>保留说明内容。</p>\\s*</callout>`),
    )
    assert.doesNotMatch(html, /\[!|<blockquote>/, marker)
  }
})

test("preserves every line whether the marker is separate or shares the first line", () => {
  const sources = [
    "> [!NOTE]\n> 第一行\n> 第二行\n> 第三行",
    "> [!note] 第一行\n> 第二行\n> 第三行",
  ]

  for (const source of sources) {
    const html = render(source)

    assert.match(html, /<callout type="note">/)
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

  assert.match(html, /<callout type="tip">/)
  assert.match(
    html,
    /<p><strong>先检查配置<\/strong>，再阅读 <a href="https:\/\/example.com\/docs">文档<\/a>。<\/p>/,
  )
  assert.match(html, /<p>第二段保留 <code>const value = 1<\/code> 和 <em>强调<\/em>。<\/p>/)
  assert.doesNotMatch(html, /\[!/)
})

test("renders inline code as the first content in a callout", () => {
  const html = render("> [!IMPORTANT] `npm run build` 后继续。")

  assert.match(html, /<callout type="important">\s*<p><code>npm run build<\/code> 后继续。<\/p>/)
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
    /<callout type="caution">\s*<p>外层开头。<\/p>\s*<callout type="important">\s*<p><strong>内层说明。<\/strong><\/p>\s*<\/callout>\s*<p>外层结尾。<\/p>\s*<\/callout>/,
  )
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
    assert.doesNotMatch(html, /<callout/)
  }
})
