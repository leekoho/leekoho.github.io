---
title: "TypeScript Enum添加静态方法"
description: "使用 enum + namespace 的声明的方式向枚举类型添加静态方法"
pubDate: "2022-10-11"
tags: ["TypeScript"]
draft: true
---

如下例所示，可以将静态成员 `isBusinessDay` 添加到枚举上：

```typescript
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false
      default:
        return true
    }
  }
}

const mon = Weekday.Monday
const sun = Weekday.Sunday

console.log(Weekday.isBusinessDay(mon)) // true
console.log(Weekday.isBusinessDay(sun)) // false
```
