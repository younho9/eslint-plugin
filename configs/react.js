/** @type {import('eslint').Linter.Config} */
module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
};
