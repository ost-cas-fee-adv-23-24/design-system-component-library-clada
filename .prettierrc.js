/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	endOfLine: 'auto',
	trailingComma: 'all',
	bracketSameLine: true,
	arrowParens: 'always',
	plugins: ['prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
};
