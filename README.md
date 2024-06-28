<h1 align='center'>Vue3 SPA</h1>

<br>

<p align='center'>
  <a href="https://vitejs.dev/" target="_blank"><img height="30" src="./src/assets/vite.svg"/></a>
  <a href="https://vuejs.org/" target="_blank"><img height="30" src="./src/assets/vue.svg"/></a>
  <a href="https://pinia.vuejs.org/" target="_blank"><img height="30" src="./src/assets/pinia.svg"/></a>
  <a href="https://vitest.dev/" target="_blank"><img height="30" src="./src/assets/vitest.svg"/></a>
  <a href="https://vueuse.org/" target="_blank"><img height="30" src="./src/assets/vueuse.svg"/></a>
  <a href="https://vue-i18n.intlify.dev/" target="_blank"><img height="30" src="./src/assets/i18n.svg"/></a>
  <a href="https://unplugin.unjs.io/" target="_blank"><img height="30" src="./src/assets/unplugin.svg"/></a>
</p>

<p align="center">A simple and pure Vue 3 single-page application starter template.</p>

<p align='center'>
  <a href="https://vue3-spa.netlify.app/">Live Demo</a>
</p>

## Introduction

Built with the latest Vue 3 ecosystem technologies, without extra features and UI frameworks, providing developers with the best basic template for starting SPA projects.

## Features

- Mainstream ecosystem: Vue 3, Vite, Vitest, pnpm
- Ready-to-use configurations: TypeScript, ESLint, Prettier, Vitest, Cypress, etc.
- Unified plugin system with Unplugin, auto-import Composables, Components, Stores, Routers
- File-based routing and layout system
- State management with Pinia
- Internationalization with Vue I18n
- Markdown support
- ...

## Configuration

- It is recommended to open the project folder with VSCode. It will prompt you to install extensions; click to agree to install all extensions.
- ESLint and Prettier configurations use [@antfu/eslint-config](https://github.com/antfu/eslint-config). Please read the instructions carefully.
- Use pnpm to install dependencies.

## Getting Started

- node >= 20
- pnpm >= 9.4

```bash
# Clone the project
npx degit devlaunchpad/vue3-spa my-spa

# Enter the directory
cd my-spa

# Install pnpm
npm i pnpm -g

# Install dependencies
pnpm i
```

## Service Commands

```bash
# Development
pnpm dev

# Build
pnpm build

# ESLint check, do not fix
pnpm lint

# ESLint check, with fix
pnpm lint:fix

# Preview the build result, HTTP protocol
pnpm preview

# Preview the build result, HTTPS protocol
pnpm preview:https

# Automated testing, including components, pages, composables, etc.
pnpm test

# Automated e2e testing
pnpm test:e2e

# TypeScript check
pnpm typecheck

# Check for dependency updates
pnpm up

# Rebuild dependencies, dangerous
pnpm ri

# Visualize bundle analysis
pnpm sizecheck
```

## License

[MIT](./LICENSE) License &copy; 2024-PRESENT [Dev LaunchPad](https://github.com/devlaunchpad)
