import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			$i18n: 'src/i18n',
			$toasts: 'src/lib/toasts',
			$alerts: 'src/lib/alerts',
			$src: 'src',
			$lib: 'src/lib'
		}
	},
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom'
	}
});
