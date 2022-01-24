# @younho9/eslint-plugin

> Personal ESLint plugin with multiple configs

## Install

Install `@younho9/eslint-plugin` with peerDependencies.

```sh
$ npx install-peerdeps --dev @younho9/eslint-plugin
```

## Usage

`.eslintrc.js` or `.eslintrc.cjs`

```js
/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: ['plugin:@younho9/recommended'],
	/** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration */
	parserOptions: {
		project: [
			'./tsconfig.json',
			'./packages/*/tsconfig.json', // if you use monorepo
		],
		ecmaVersion: 'latest',
	},
	settings: {
		/** @see https://github.com/import-js/eslint-plugin-import#importparsers */
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
};
```

## License

[MIT](LICENSE)
