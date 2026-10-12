# Posts · leekoho

基于 Astro 的个人博客，包含文章归档、Markdown 阅读、密码文章、关于页、RSS 和深浅主题。

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
| `pnpm test`      | 验证 Markdown 提示块渲染         |
| `pnpm build`     | 构建静态页面到 `dist/`，排除草稿 |
| `pnpm preview`   | 预览生产构建                     |
| `pnpm fmt`       | 格式化代码与 Astro 模板          |
| `pnpm fmt:check` | 检查格式                         |

## 内容与样式

- 文章放在 `src/content/posts/`，集合结构定义于 `src/content.config.ts`。
- 支持 `title`、`description`、`pubDate`、`tags`、`draft` 和可选的 `password` 字段。
- `/tags/` 展示标签及文章数量，`/tags/标签名/` 展示该标签下的文章；文章详情里的标签可直接跳转，中文标签使用 URL 编码。生产构建的标签统计与文章列表均排除草稿。
- 个人资料与站点文案在 `src/consts.ts`，品牌标识在 `src/assets/logo.svg`。
- 视觉规范见 [DESIGN.md](./DESIGN.md)，全局样式在 `src/styles/`。

## 配置约定

Astro 7 使用 Sätteri 处理 Markdown，提示块通过原生 MDAST 插件实现。控件与正文排版使用 Starwind UI 的 Astro 组件，源码位于 `src/components/starwind`，安装记录位于 `starwind.config.json`。Tailwind 4 的主题与插件在 CSS 中配置，`src/styles/starwind.css` 将组件语义变量映射到博客现有的浅色／深色配色，`src/styles/prose.css` 保留中文阅读排版与 Shiki 适配。

`muted` 与 `accent` 用于背景；弱化文字与强调文字分别使用 `muted-foreground` 和 `accent-foreground`。主题菜单继续由原有主题控制器管理浅色、深色和跟随系统三种偏好。更新 Starwind 组件前请检查差异，保留本地对按钮尺寸、触屏目标和 Prose 样式层的定制。

TypeScript 保持在最新的 6.x：当前 `@astrojs/check` 尚不支持 TypeScript 7。其他直接依赖使用最新稳定版本。

Markdown 提示块继续使用 `[!NOTE]`、`[!TIP]`、`[!IMPORTANT]`、`[!WARNING]`、`[!CAUTION]`。插件生成静态 `<aside>`，保留原来的左侧图标、细线、浅灰底与正文缩进，不显示额外标题。类型名称通过 `aria-label` 提供，文章内容不会作为动态通知播报。

文章页顶部将 Posts 返回链接、标签链接、标题、可选简介及发布日期合并为一个标题区；正文紧接标题区，不显示作者名字、复制或上下篇工具栏。标签索引以横向排列、自动换行的标签块展示，每个标签块保留文章数量。

Oxfmt 负责常规源文件，Prettier 配合 Astro 插件处理 `.astro` 模板；两者共享相同的行宽和分号约定。pnpm 的依赖构建脚本通过 `pnpm-workspace.yaml` 的 `allowBuilds` 明确配置。

升级时可参考 [Astro 7 迁移指南](https://docs.astro.build/en/guides/upgrade-to/v7/)、[Sätteri 插件接口](https://satteri.bruits.org/docs/plugin-api/) 和 [pnpm 构建设置](https://pnpm.io/settings/build#allowbuilds)。

## 部署

GitHub Pages 工作流位于 `.github/workflows/deploy.yml`，站点地址配置在 `astro.config.ts`。RSS 地址为 `/feed.xml`，站点地图在构建时自动生成。`vercel.json` 保留 Vercel 的 RSS 响应头配置。
