---
title: "React 外部状态同步：别死磕 useEffect 了"
description: "探讨在 React 开发中，为何及如何使用 useSyncExternalStore 替代复杂的 useEffect 进行外部状态（如网络状态、原生DOM、全局 Store）的同步操作。"
pubDate: "2026-04-11"
tags: ["React", "Hooks"]
---

处理那些不受 React 控制的数据（原生 DOM 状态、浏览器 API、自定义 Store），用 `useEffect` 手动同步非常麻烦，而且容易写出状态不一致的 Bug。

React 18 之后，官方其实给了一个更直接的工具：`useSyncExternalStore`。

## 核心痛点：状态双向同步

拿 `navigator.onLine` 举例，传统的 `useEffect` 写法：

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

这么写的痛点：

- **代码啰嗦**：为了同步一个值，得维护监听器和状态两套逻辑。
- **状态脱节**：如果你在代码其他地方误改了 isOnline，它就和真实的浏览器状态对不上了。
- **SSR 软肋**：`useEffect` 在服务端不执行，处理服务端渲染时的初始状态很麻烦.

## 更好的方案：`useSyncExternalStore`

`useSyncExternalStore` 这个 Hook 专门用于将 React 变量与外部存储同步。它只需要两个核心参数

- `subscribe`：一个订阅函数，用于注册回调。每当外部数据变化时，它会通知 React 。
- `getSnapshot`：一个函数，用于获取外部数据的当前快照（即当前值）。

同样的网络状态功能，代码可以精简成这样：

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

## 场景进阶：处理原生 HTML5 `<dialog>` 的状态脱节

原生 `<dialog>` 标签有一个特性：用户按 <kbd>Esc</kbd> 键可以直接关闭它。如果你用 React 的 `isOpen` 状态去控制：

1. 你点击按钮，`setIsOpen(true)`，弹窗开了。
2. 用户按 <kbd> Esc</kbd> 键，弹窗在 DOM 层面关闭了。
3. 但 React 里的 `isOpen` 依然是 `true`。

## 正确的做法：直接订阅 DOM 状态

我们不再自己维护一份 `isOpen` 变量，而是直接去问 `<dialog>` 元素：“你现在到底开没开？”

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

为什么这么写更好？

- **单一数据源**：状态只存在于 `<dialog>` 元素本身，React 只是它的“观察者”。
- **无缝兼容原生行为**：无论用户是通过点击按钮关闭，还是按 Esc 键关闭，`isOpen` 永远和屏幕上显示的结果一致。
- **逻辑自洽**：你不需要在 `useEffect` 里写一大堆判断逻辑去手动同步状态。

## 总结

“不要在 React 内部存副本，直接去外面拿真数据。” 这是这个 Hook 的核心逻辑。只要是同步非 React 管理的状态，它就是标准答案。
