---
title: "Markdown Style Guide"
#description: "Lorem ipsum dolor sit amet"
pubDate: "2021-03-11"
tags: ["Demo"]
---

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Code Blocks

```ts title="User.ts" caption="TypeScript 5.1.3" {4, 5, 6} /x/#r /y/#g /z/#b
let str = "word"
const num = "number"
var c = str + num
function func(param1) {
  return param1++
}

const { x, y, z } = usePosition()
```

[//]: # "This code is inline: `[1, 2, 3].join('-'){:js}` is `'1-2-3'{:js}`"

## Images

[//]: # "![This is a placeholder image description](../../assets/images/favicon.svg)"

![](https://talks.antfu.me/2023/github-notifications/notifications-count.png)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |
| _italics_ | **bold** | `code` |

[//]: # "## ANSI highlighting"
[//]: #
[//]: # "```ansi "
[//]: # "[0;36m  vite v2.8.6[0;32m dev server running at:[0m"
[//]: #
[//]: # "> Local: [0;36mhttp://localhost:[0;36;1m3000[0;36m/[0m"
[//]: # "> Network: [0;2muse `--host` to expose[0m"
[//]: #
[//]: # "  [0;36mready in 125ms.[0m"
[//]: #
[//]: # "[0;2m8:38:02 PM[0m [0;36;1m[vite][0m [0;32mhmr update [0;2m/src/App.jsx"
[//]: # "```"
[//]: #
[//]: # "Inline ANSI: `> Local: [0;36mhttp://localhost:[0;36;1m3000[0;36m/[0m{:ansi}`"

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
