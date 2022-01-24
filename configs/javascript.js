/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['plugin:jsdoc/recommended'],
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
	},
};
