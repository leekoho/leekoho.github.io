---
version: alpha
name: leekoho-blog
description: >-
  以阅读为中心的窄栏博客。纯白或近黑画布、低对比细线、克制的灰阶、
  Geist 与中文无衬线字体组成安静的编辑式界面。层级主要依靠字重、
  留白和分隔线，而非大面积色块、卡片或阴影。
colors:
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  hover: "#f5f5f7"
  ink: "#202024"
  ink-secondary: "#3f3f46"
  ink-muted: "#707077"
  hairline: "#e8e8ec"
  hairline-strong: "#d5d5dc"
  pattern: "#efeff2"
  canvas-dark: "#111113"
  canvas-soft-dark: "#171719"
  hover-dark: "#1e1e22"
  ink-dark: "#eeeef0"
  ink-secondary-dark: "#d7d7dd"
  ink-muted-dark: "#aaaab2"
  hairline-dark: "#2a2a30"
  hairline-strong-dark: "#45454e"
  pattern-dark: "#232328"
typography:
  page-title:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: "30px mobile / 36px desktop"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.025em"
  article-title:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: "30px mobile / 36px desktop"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  section-title:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  body:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 32px
  summary:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 28px
  list-title:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 28px
  meta:
    fontFamily: "Geist Mono, PingFang SC, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  control:
    fontFamily: "Geist, PingFang SC, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
rounded:
  small: 4px
  medium: 6px
  large: 8px
components:
  page-frame:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    maxWidth: 768px
    sideBorders: "1px {colors.hairline}"
  top-nav:
    height: 64px
    paddingInline: "16px mobile / 24px desktop"
    bottomBorder: "1px {colors.hairline}"
  section-rule:
    border: "1px {colors.hairline}"
    reach: "full viewport"
  stripe-divider:
    height: 16px
    pattern: "135deg 细斜线，{colors.pattern}"
  list-row:
    padding: "24px 16px mobile / 24px 24px desktop"
    bottomBorder: "1px {colors.hairline}"
    hoverBackground: "{colors.hover}"
  button-default:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.control}"
    rounded: "{rounded.medium}"
    height: 36px
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px {colors.hairline}"
    typography: "{typography.control}"
    rounded: "{rounded.medium}"
    height: 36px
  article-body:
    typography: "{typography.body}"
    paddingInline: "16px mobile / 24px desktop"
    maxWidth: "within {components.page-frame}"
  info-grid:
    columns: "2 mobile / 3 desktop"
    borders: "1px {colors.hairline}"
---

# leekoho 设计系统

## 视觉主题与氛围

这是一个安静的阅读界面：768px 窄栏居中，正文是视觉主角。左右边界、横贯视口的细线和少量斜线分隔带形成节奏；灰阶负责层级，留白负责分组。参考 [chanhdai.com/bookmarks](https://chanhdai.com/bookmarks) 的窄栏与细线语言。

视觉优先级是标题、正文、元信息。页面不以彩色强调、插画、渐变或大卡片制造层级。Logo 保持 A / 折角环的比例，图形与字标同色，随浅色和深色主题切换。

## 颜色与角色

| 角色     | 浅色                     | 深色                          | 用途                   |
| -------- | ------------------------ | ----------------------------- | ---------------------- |
| 画布     | {colors.canvas}          | {colors.canvas-dark}          | 页面主体               |
| 柔和底色 | {colors.canvas-soft}     | {colors.canvas-soft-dark}     | 引用、表头、低强调区域 |
| 悬停底色 | {colors.hover}           | {colors.hover-dark}           | 列表行和轻量控件悬停   |
| 主文字   | {colors.ink}             | {colors.ink-dark}             | 标题、正文、主要图标   |
| 次级文字 | {colors.ink-secondary}   | {colors.ink-secondary-dark}   | 阅读正文的柔和层级     |
| 弱化文字 | {colors.ink-muted}       | {colors.ink-muted-dark}       | 日期、说明、辅助图标   |
| 细线     | {colors.hairline}        | {colors.hairline-dark}        | 页面边界、分区、列表行 |
| 强细线   | {colors.hairline-strong} | {colors.hairline-strong-dark} | 需要略高对比的边界     |
| 斜线纹理 | {colors.pattern}         | {colors.pattern-dark}         | 分隔带                 |

主操作采用主文字与画布的反色组合。普通链接沿用文字色，以细下划线识别；悬停时加深下划线或文字对比。除提示块自身的语义色外，不引入装饰性的品牌强调色。

## 字体与排版

中文优先使用 PingFang SC，回退到 Hiragino Sans GB、Source Han Sans 和系统无衬线字体。拉丁字母使用 Geist，代码与数字元信息使用 Geist Mono。中文不使用衬线字体。

| 层级     | 尺寸 / 行高                  | 字重 | 用途               |
| -------- | ---------------------------- | ---- | ------------------ |
| 页面标题 | 30px 手机、36px 桌面 / 1.5   | 500  | 页面开头           |
| 文章标题 | 30px 手机、36px 桌面 / 1.375 | 500  | 长标题允许换行     |
| 区块标题 | 18px / 28px                  | 500  | 分区标题           |
| 正文     | 16px / 32px                  | 400  | 阅读内容           |
| 简介     | 14px / 28px                  | 400  | 标题下方的简短说明 |
| 列表标题 | 16px / 28px                  | 500  | 连续列表           |
| 元信息   | 12px / 20px                  | 400  | 日期和辅助信息     |
| 控件文字 | 14px / 20px                  | 500  | 按钮和菜单         |

正文二级标题为 24px，三级标题 18px，四级标题 16px；均使用中等字重。段落、列表、代码块、引用与图片保持 24px 外间距，标题后的首个内容块不重复叠加上间距。长中文标题使用自然换行，代码保持等宽。

## 组件样式

- **页面框架与导航：** 页面最大宽度 768px，左右 1px 边界。导航高 64px，图形标识手机 28px、桌面 32px；字标手机 18px、桌面 20px。导航文字 14px，当前项以主文字色呈现，非当前项使用弱化文字色。
- **分隔线与纹理：** 普通分区只用 1px 细线；需要停顿的地方使用 16px 高、135° 的密集细斜线。横向分区线延伸至视口边缘，内容仍与窄栏对齐。
- **连续列表：** 行与行之间以细线分隔，不包进单独卡片。图标和末端箭头保持轻细，标题用主文字色，辅助信息用弱化文字色。悬停仅出现轻微灰底，不放大或抬升。
- **按钮与图标控件：** 默认按钮为深底浅字；描边按钮为画布底和细线边框；幽灵按钮平时无底色，悬停使用柔和灰底。尺寸为 32px、36px、44px 三档；触屏环境目标至少 44px。禁用态降低不透明度，焦点态显示清晰的 2px 轮廓。
- **菜单与临时浮层：** 使用画布或柔和表面、1px 细线、6px 圆角。只在需要与底层分离时使用很轻的阴影；选中行使用悬停底色和主文字色。
- **文章阅读区：** 文章标题上下以细线分区，正文保持 16px / 32px。行内代码用柔和底色和细边框；代码块与宽表格在自身区域内横向滚动。图片最大宽度为正文宽度，使用 8px 圆角和细边框。引用使用 2px 左侧线和柔和底色。
- **信息网格与页脚：** 信息网格使用细线划分单元，桌面三列、手机两列。页脚沿用 16px / 24px 水平内边距，文字与图标使用弱化文字色。

## 布局、间距与留白

基础间距以 4px 递进，常用 8、16、24、32、48px。全站横向内边距手机 16px、桌面 24px；导航、标题、列表、正文和页脚共用同一对齐线。页面标题区的内边距为手机 16px、桌面 24px；内容末尾留白为手机 32px、桌面 48px。

区块标题与资料行的垂直内边距为 16px，文章列表行为 24px，年份或分类条为 8px。元信息距标题 8px。阅读正文内二级标题上方留 40px、下方 16px；三级标题为 32px / 16px；四级标题为 24px / 12px。代码块、引用和提示块内部使用 16px 内边距。

## 深度与层次

常规内容保持平面：画布、字体层级、细线和留白已经足够建立顺序。不要给列表行、正文或整块区段加投影。只有菜单和短暂浮层可使用低对比阴影，浅色主题约为 0 6px 20px rgb(0 0 0 / 6%)，深色主题约为 0 6px 20px rgb(0 0 0 / 20%)。圆角用于控件、代码和图片，不用于页面大框架。

## 应做与避免

**应做：** 使用语义颜色角色而非临时选色；保持窄栏和统一对齐线；通过行高与留白提升可读性；让悬停、焦点和禁用状态清晰但克制；确保浅色和深色主题有相同的视觉层级。

**避免：** 大面积渐变、彩色背景、悬浮卡片、粗重阴影、持续动画、中文衬线字体，以及为单个页面引入新的间距尺度。不要用颜色代替边界和文字层级。

## 响应式与动效

以 640px 为主要断点。手机保持 16px 水平内边距和 30px 页面标题；桌面使用 24px 与 36px。小屏幕的列表文字自然换行，图标和箭头不挤占正文；工具栏可换行，页面本身不产生横向溢出。触屏控件至少 44px。尊重 prefers-reduced-motion，缩减或取消过渡与动画。

## 给设计代理的使用指引

新页面先沿用画布、768px 框架和统一对齐线，再选择上面的文字层级、间距与分隔方式。新增组件先匹配已有的列表行、按钮、菜单或阅读区样式；确需新样式时，说明其颜色角色、尺寸、边界、交互状态及浅深主题表现。以这些可复用规则判断视觉一致性。
