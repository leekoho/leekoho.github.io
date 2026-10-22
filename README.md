# Posts · leekoho

基于 Astro 的个人博客，包含文章归档、MDX 阅读、关于页、RSS 和深浅主题。

## 本地开发

使用 Node.js 22.13.0 或更高版本，以及 `package.json` 中固定的 pnpm 版本。项目统一使用 `pnpm-lock.yaml`。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

开发地址以终端输出为准，默认是 `http://localhost:4321`。

如果旧版 Corepack 无法启动 pnpm 12，可直接使用以下命令，无需修改全局环境：

```sh
npx pnpm@12.4.2 install --frozen-lockfile
npx pnpm@12.4.2 dev
```

| 命令             | 用途                             |
| ---------------- | -------------------------------- |
| `pnpm dev`       | 启动开发服务器，包含草稿         |
| `pnpm check`     | 检查 Astro 和 TypeScript 类型    |
| `pnpm test`      | 验证提示块和代码高亮数据转换     |
| `pnpm build`     | 构建静态页面到 `dist/`，排除草稿 |
| `pnpm preview`   | 预览生产构建                     |
| `pnpm fmt`       | 格式化代码与 Astro 模板          |
| `pnpm fmt:check` | 检查格式                         |

## 内容与样式

- 文章放在 `src/content/posts/`，集合结构定义于 `src/content.config.ts`。
- 支持 `title`、`description`、`pubDate`、`tags`、`draft` 字段。
- `/tags/` 展示标签及文章数量，`/tags/标签名/` 展示该标签下的文章；文章详情里的标签可直接跳转，中文标签使用 URL 编码。生产构建的标签统计与文章列表均排除草稿。
- 个人资料与站点文案在 `src/consts.ts`，品牌标识在 `src/assets/logo.svg`。
- 视觉规范见 [DESIGN.md](./DESIGN.md)，全局样式在 `src/styles/`。

## 配置约定

Astro 7 使用 Sätteri 和 `@astrojs/mdx` 处理文章，页面与 UI 使用 React 和 shadcn/ui。Astro 负责静态路由、内容集合、RSS、图片与字体；列表、标签等静态 React 组件只输出 HTML，主题菜单、代码块复制和图片预览才在浏览器中启用交互。

- `components.json` 配置 shadcn/ui 的 Radix Nova 风格。使用 `npx shadcn@latest add <组件名>` 添加组件。
- `src/components/ui/` 保存通过 shadcn/ui 官方 CLI 添加并适配本站的组件源码。
- `src/components/posts/mdx-components.tsx` 集中映射 `pre`、表格各标签、`aside`、`hr` 和 `kbd`；标题、链接、引用、列表和行内代码遵循 shadcn/ui Typography，通过 `src/styles/prose.css` 保持中文阅读排版。文章中写 `<Kbd>Esc</Kbd>` 即可使用按键组件，无需逐篇导入，也不会加载客户端 JavaScript。
- 文章使用 `.mdx`，仍可直接写 Markdown。需要写 HTML 时遵循 JSX 语法，例如 `<br />`；无需逐篇导入标准标签的映射组件。自定义 React 组件可通过 MDX 导入，并按需指定 `client:*`。
- `plugins/hast-code-block.ts` 在构建时提取 Shiki token，交给 shadcn/ui Code Block 渲染，保留明暗主题颜色与原始代码。代码块支持 `title="filename.ts"`、行号与复制按钮，不在浏览器下载高亮语法库。
- 提示块继续使用 `[!NOTE]`、`[!TIP]`、`[!IMPORTANT]`、`[!WARNING]`、`[!CAUTION]`，由 MDAST 插件识别，并通过 shadcn/ui Alert 搭配主题颜色呈现。它们作为静态说明内容，不作为动态警报播报。
- `src/styles/tailwind.css` 定义博客明暗配色，`src/styles/ui.css` 映射组件语义变量。`muted` 与 `accent` 用于背景，文字分别使用 `muted-foreground` 和 `accent-foreground`。
- 顶部主题切换使用 shadcn/ui Dropdown Menu，提供浅色、深色和跟随系统三种偏好，使用已有的 `theme-preference` 存储键，并在 Astro 页面切换前同步主题。
- 图片预览使用 shadcn/ui Dialog，支持键盘打开、Escape 关闭及关闭后恢复图片焦点。

TypeScript 保持 6.x，以兼容当前 `@astrojs/check`。

文章页顶部将 Posts 返回链接、标签链接、标题、可选简介及发布日期合并为一个标题区；正文紧接标题区，不显示作者名字、复制或上下篇工具栏。标签索引以横向排列、自动换行的标签块展示，每个标签块保留文章数量。

Oxfmt 负责常规源文件，Prettier 配合 Astro 插件处理 `.astro` 模板；两者共享相同的行宽和分号约定。pnpm 的依赖构建脚本通过 `pnpm-workspace.yaml` 的 `allowBuilds` 明确配置。

升级时可参考 [Astro 7 迁移指南](https://docs.astro.build/en/guides/upgrade-to/v7/)、[Sätteri 插件接口](https://satteri.bruits.org/docs/plugin-api/) 和 [pnpm 构建设置](https://pnpm.io/settings/build#allowbuilds)。

## 部署

GitHub Pages 工作流位于 `.github/workflows/deploy.yml`，站点地址配置在 `astro.config.ts`。RSS 地址为 `/feed.xml`，站点地图在构建时自动生成。`vercel.json` 保留 Vercel 的 RSS 响应头配置。
