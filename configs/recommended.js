const ignorePatterns = ['**/dist/*'];

/** @type {import('eslint').Linter.Config} */
module.exports = {
	ignorePatterns,
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:node/recommended-module',
		'plugin:import/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		// Disabled because it's buggy and it also doesn't work with TypeScript
		'import/no-unresolved': 'off',
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				'alphabetize': {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
	overrides: [
		{
			files: ['*.js'],
			extends: ['plugin:@younho9/javascript'],
		},
		{
			files: ['*.cjs'],
			extends: ['plugin:@younho9/javascript', 'plugin:node/recommended-script'],
		},
		{
			files: ['*.jsx'],
			extends: ['plugin:@younho9/javascript', 'plugin:@younho9/react'],
		},
		{
			files: ['*.ts'],
			extends: ['plugin:@younho9/typescript'],
		},
		{
			files: ['*.tsx'],
			extends: ['plugin:@younho9/typescript', 'plugin:@younho9/react'],
		},
		{
			files: ['**/__tests__/**/*.{spec,test}.*'],
			extends: ['plugin:@younho9/jest'],
		},
	],
};
