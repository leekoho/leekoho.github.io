---
title: "React 处理外部状态时，什么时候该用 useSyncExternalStore"
description: "React 里有些状态本来就不归它管，这时候继续用 useEffect 硬同步，通常不如直接上 useSyncExternalStore。"
pubDate: "2026-04-11"
tags: ["React", "Hooks"]
---

写 React 的时候，真正麻烦的往往不是组件内部那点 `useState`，而是那些本来就不归 React 管的东西，比如原生 DOM 状态、浏览器 API，或者你自己挂在外面的 Store。

很多人遇到这种场景，第一反应还是 `useEffect`：自己绑事件，自己改状态，最后再自己清理。能写，但写着写着就会发现，这套东西很容易变得很拧巴，顺便再带来几个状态不同步的问题。

React 18 其实已经给了更合适的解法，就是 `useSyncExternalStore`。

## 先看老写法的问题

先拿 `navigator.onLine` 举个例子。这个场景很常见，写法大多也差不多：

```tsx
const [isOnline, setIsOnline] = useState(navigator.onLine)

useEffect(() => {
  const handle = () => setIsOnline(navigator.onLine)
  window.addEventListener("online", handle)
  window.addEventListener("offline", handle)
  // 必须手动清理，不然容易内存泄漏
  return () => {
    window.removeEventListener("online", handle)
    window.removeEventListener("offline", handle)
  }
}, [])
```

这段代码当然没错，但别扭的地方也挺明显：

- **代码有点重**：只是想读一个浏览器状态，结果还得自己维护监听器和一份 React 状态。
- **容易出现副本问题**：`isOnline` 本质上只是浏览器状态的一个拷贝，别的地方一旦改乱了，就会和真实值对不上。
- **SSR 不太舒服**：`useEffect` 不会在服务端执行，初始状态怎么处理通常还得额外补。

## 换成 `useSyncExternalStore`

`useSyncExternalStore` 就是拿来处理这种场景的。你基本只需要告诉 React 两件事：

- `subscribe`：怎么订阅外部变化。
- `getSnapshot`：React 需要当前值时，该从哪儿拿。

还是刚才那个网络状态，改成这样就行：

```tsx
function OnlineStatus() {
  const isOnline = useSyncExternalStore(
    // subscribe
    (callback) => {
      // 这个 callback 是 React 内部实现的“通知函数”
      // 它的唯一任务：告诉 React “外面数据变了，你该干活了”
      window.addEventListener("online", callback)
      window.addEventListener("offline", callback)
      return () => {
        window.removeEventListener("online", callback)
        window.removeEventListener("offline", callback)
      }
    },
    // getSnapshot：React 听到“闹钟”响后，会调这个函数拿当前值
    () => navigator.onLine,
    // 服务端渲染默认值（可选）
    () => true,
  )

  return <h1>{isOnline ? "在线" : "离线"}</h1>
}
```

## 再看一个更容易踩坑的例子

比如原生 HTML5 的 `<dialog>`。

这个元素本身就有自己的开关逻辑。用户按一下 <kbd>Esc</kbd>，它就能直接关掉。如果你在 React 里再维护一个 `isOpen` 去控制它，事情就会变成这样：

1. 你点击按钮，`setIsOpen(true)`，弹窗开了。
2. 用户按 <kbd> Esc</kbd> 键，弹窗在 DOM 层面关闭了。
3. 但 React 里的 `isOpen` 依然是 `true`。

这里的问题不在于 React 反应慢，而在于你其实维护了两份状态：一份在 React 里，一份在 DOM 里。只要两边有任何一步没跟上，就会出现看起来“状态对不上”的情况。

## 更省事的写法

更省事的办法其实很简单：不要再单独复制一份 `isOpen`，直接读 `<dialog>` 自己的状态。

```tsx
import { useSyncExternalStore, useRef } from "react"

function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // 订阅：监听 dialog 的 toggle 事件
  const isOpen = useSyncExternalStore(
    (callback) => {
      const el = dialogRef.current
      if (!el) return () => {}

      // 只要 dialog 的打开状态变了（包括按 Esc），就通知 React
      el.addEventListener("toggle", callback)
      return () => el.removeEventListener("toggle", callback)
    },
    // 取数：直接从 DOM 获取真实状态
    () => dialogRef.current?.open ?? false,
  )

  return (
    <>
      <button onClick={() => dialogRef.current?.showModal()}>打开弹窗</button>

      <dialog ref={dialogRef}>
        <p>这是一个原生弹窗</p>
        <p>当前状态：{isOpen ? "开启" : "已关闭"}</p>
        <button onClick={() => dialogRef.current?.close()}>手动关闭</button>
      </dialog>
    </>
  )
}
```

这样写的好处很实在：

- **状态只有一份**：开还是关，都以 `<dialog>` 元素本身为准，React 只是把它读出来。
- **原生行为不会打架**：点按钮关闭也好，按 Esc 关闭也好，界面和状态始终能对上。
- **逻辑轻很多**：不用额外写一圈 `useEffect` 去做补丁式同步。

## 最后

我自己现在判断这类问题，标准其实很简单：如果这份状态本来就不归 React 管，那就先别急着在组件里再存一份副本。

直接订阅它，直接读取它。大多数时候，这都比 `useEffect + useState` 那种“自己同步自己兜底”的写法更自然，也更不容易出错。
