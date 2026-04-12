---
title: "加密测试文章"
description: "用于验证博客静态加密功能：构建端与客户端均使用 Web Crypto API，零第三方依赖。"
password: "hello123"
pubDate: "2026-04-12"
tags: ["测试", "加密"]
---

如果你能看到这段文字，说明加密功能运行正常。🎉

密码是：`hello123`

## 技术方案

构建端（Node.js）和客户端（浏览器）均使用原生 **Web Crypto API**（`crypto.subtle`），零第三方依赖。

### 构建时（Node.js）

1. `crypto.getRandomValues` 生成随机 **Salt** 和 **IV**（各 128 位）
2. `crypto.subtle.importKey` 导入密码原材料
3. `crypto.subtle.deriveKey`（PBKDF2 + SHA-256 + 10,000 次迭代）推导 256 位 AES 密钥
4. `crypto.subtle.encrypt`（AES-CBC）加密 HTML 内容
5. 导出密钥字节 → 转 Hex → `crypto.subtle.digest`（SHA-256）生成凭证哈希

以上结果以 `data-*` 属性形式注入到 HTML 中：只有密文、Salt、IV、凭证哈希，**原文内容完全不出现在源码里**。

### 运行时（浏览器）

用户输入密码后，完全对称地重复构建端的推导步骤：

1. 用相同的 Salt 和迭代参数重新推导密钥
2. 比对 `SHA-256(keyHex)` 与页面存储的凭证哈希
3. 校验通过后才调用 `crypto.subtle.decrypt` 解密
4. 解密出的 HTML 内联替换密码输入框

### 防御特性

| 特性 | 说明 |
| --- | --- |
| 随机 Salt | 同一密码在不同文章产生完全不同的密文，防彩虹表 |
| 随机 IV | 相同内容每次加密结果不同，防模式分析 |
| PBKDF2 慢哈希 | 攻击者每次尝试密码需迭代 10,000 次，显著增加暴破成本 |
| 凭证先行校验 | 密码错误时不会尝试解密，避免无效计算 |
| 零依赖 | 构建端与客户端均使用平台内置 API，无额外引入 |
