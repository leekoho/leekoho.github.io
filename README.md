# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                         |
| :------------------------ | :------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                          |
| `npm run dev`             | Starts local dev server at `localhost:4321`                    |
| `npm run build`           | Build your production site to `./dist/`                        |
| `npm run preview`         | Preview your build locally, before deploying                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`               |
| `pnpm fmt`                | Format supported files with `oxfmt` and `.astro` with Prettier |
| `pnpm fmt:check`          | Check formatting for both `oxfmt` targets and `.astro` files   |
| `npm run astro -- --help` | Get help using the Astro CLI                                   |

## Formatting

This repo uses a mixed formatter setup:

- `oxfmt` remains the primary formatter for the file types it already supports.
- `prettier` with `prettier-plugin-astro` formats `*.astro` files.

That means `pnpm fmt` and `pnpm fmt:check` now cover Astro files too.

## WebStorm

To auto-format only `.astro` files on save in WebStorm:

1. Open `Settings` -> `Languages & Frameworks` -> `JavaScript` -> `Prettier`.
2. Set the Prettier package to this project's local install.
3. Enable `Run on save`.
4. Set `Run for files` to `**/*.astro`.

JetBrains settings are intentionally local-only here because [`.idea/`](/Users/leekoho/Projects/blog/.idea) is ignored in [`.gitignore`](/Users/leekoho/Projects/blog/.gitignore).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
