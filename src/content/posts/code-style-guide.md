---
title: "Code Style Guide"
description: "Lorem ipsum dolor sit amet"
pubDate: "2021-03-11"
tags: ["Demo"]
draft: true
---

## Diff

使用 `[!code ++]` 和 `[!code --]` 来标记增删的行。

```ts
console.log("hewwo") // [!code --]
console.log("hello") // [!code ++]
console.log("goodbye")
```

## Highlight

使用 `[!code highlight]` 来高亮显示行：

```ts
console.log("Not highlighted")
console.log("Highlighted") // [!code highlight]
console.log("Not highlighted")
```

使用 `[!code highlight:3]` 注释来高亮多行：

```ts
// [!code highlight:3]
console.log("Highlighted")
console.log("Highlighted")
console.log("Not highlighted")
```

根据代码片段上提供的元字符串(`{1,3-4}`)，高亮显示行：

```js {1,3-4}
console.log("1")
console.log("2")
console.log("3")
console.log("4")
```

## ErrorLevel

使用 `[!code error]` 和 `[!code warning]` 来指定行的日志等级：

```ts
console.log("No errors or warnings")
console.error("Error") // [!code error]
console.warn("Warning") // [!code warning]
```
