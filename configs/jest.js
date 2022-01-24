/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		jest: true,
	},
	extends: ['plugin:jest/recommended', 'plugin:jest/style'],
};
