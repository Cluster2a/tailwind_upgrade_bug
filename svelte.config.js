import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		postcss: true,
		preserve: ['ld+json', 'module'],
		typescript: true
	}),
	kit: {
		version: {
			name: process.env.CI_PIPELINE_ID
		},
		adapter: adapter({
			out: 'build',
			precompress: true
		}),
		alias: {
			$i18n: 'src/i18n',
			$toasts: 'src/lib/toasts',
			$alerts: 'src/lib/alerts',
			$src: 'src'
		}
	},
	vitePlugin: {
		prebundleSvelteLibraries: true,
		inspector: {
			holdMode: true
		}
	}
};

export default config;
