/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	tailwindConfig: 'tailwind.config.ts',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss']
};

export default config;
