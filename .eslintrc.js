module.exports = {
	env: {
		node: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"eslint-config-airbnb-base",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "error"
	}
};
