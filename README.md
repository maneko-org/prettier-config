# @maneko/prettier

[![Stars](https://img.shields.io/github/stars/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/stargazers)
[![Forks](https://img.shields.io/github/forks/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/network/members)
[![Pull Requests](https://img.shields.io/github/issues-pr/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/pulls)
[![Issues](https://img.shields.io/github/issues/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/issues)
[![Contributors](https://img.shields.io/github/contributors/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/graphs/contributors)
[![License](https://img.shields.io/github/license/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/blob/main/LICENSE)

A shared, ESM-first Prettier config for our projects - small API, zero friction, and sensible defaults.

## Why use this

- **Unified style** across our repositories.
- **Zero-config**: `export default prettier()` works out of the box.
- **ESM-first**: works naturally with modern JS/TS projects.
- **Customizable**: pass options or extend the factory for project needs.
- **Prettier 3+ compatible** and plays nicely with `lint-staged`, `husky`, CI pipelines.

## Installation

Install the package (choose your package manager):

```bash
# pnpm (recommended)
pnpm add -D prettier @maneko/prettier

# yarn
yarn add -D prettier @maneko/prettier

# npm
npm install -D prettier @maneko/prettier
```

For TailwindCSS users, install this optional plugin:

```bash
pnpm add -D prettier-plugin-tailwindcss
```

## Quick start

Create a Prettier config file in your project.

ESM project (`.prettierrc.mjs`):

```js
import { prettier } from '@maneko/prettier';

export default prettier();
```

CJS project (`.prettierrc.cjs` / `.prettierrc.js`):

```js
const { prettier } = require('@maneko/prettier');

module.exports = prettier();
```

## Customize / override defaults

Pass options to override Prettier's defaults:

```js
import { prettier } from '@maneko/prettier';

export default prettier({
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none'
  // any other Prettier options
});
```

The function simply merges your options with the shared defaults — minimal API, familiar behavior.

## Scripts & lint-staged

Add scripts to `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Example `lint-staged` + `husky`:

```json
{
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx,mjs,cjs,json,md}": ["pnpm format"]
  }
}
```

## IDE (VS Code) integration

Install the Prettier VS Code extension: `esbenp.prettier-vscode`.

Recommended `.vscode/settings.json`:

```jsonc
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.resolveGlobalModules": false,
  "prettier.requireConfig": true
  // If you use an ESLint config for formatting, you may want:
  // "eslint.format.enable": false
}
```

> If you use both `@maneko/eslint` and `@maneko/prettier`, let Prettier handle pure formatting (quotes, spacing, commas) and ESLint handle logic and style rules.

## Contributing

PRs welcome. Keep changes small and document any new opinionated rules.

## License

`@maneko/prettier` is licensed under the MIT License. See the `LICENSE` file in the repository.
