/** @type {import('eslint').Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
	],
	rules: {
		'node/no-missing-import': 'off',
		'node/no-missing-require': 'off',
		'node/no-extraneous-import': 'off',
		'node/no-extraneous-require': 'off',
	},
};
