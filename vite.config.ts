import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

const config: UserConfig = {
	server: {
		hmr: {
			clientPort: 80
		},
		watch: {
			ignored: ['**/tools/**', '**/static/**', '**/node_modules/**', '**/.pnpm-store/**']
		},
		allowedHosts: [
			'app.freispace.io',
			'app.staging.cloud.freispace.com',
			'demo.freispace.com',
			'app.freispace.com'
		]
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},
	build: {
		minify: true,
		target: 'es2022',
		sourcemap: false
	},
	esbuild: {
		target: 'es2022'
	},
	define: {
		__DATE__: `'${new Date().toISOString()}'`,
		__RELOAD_SW__: false
	},
	resolve: {
		extensions: ['.ts', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte']
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2022'
		},
		include: [
			'uuid',
			'typesafe-i18n/svelte',
			'typesafe-i18n',
			'typesafe-i18n/detectors',
			'typesafe-i18n/utils',
			'luxon',
			'@sentry/sveltekit',
			'apisauce',
			'svelte/internal/disclose-version',
			'throttle-debounce',
			'tippy.js',
			'sweetalert2',
			'chartjs-adapter-luxon',
			'chart.js/auto',
			'file-saver',
			'daypilot-pro-javascript',
			'socket.io-client',
			'@tiptap/core',
			'@tiptap/starter-kit',
			'@tiptap/extension-link',
			'@tiptap/extension-placeholder',
			'@tiptap/extension-bubble-menu',
			'@tiptap/extension-underline',
			'@tiptap/pm/state',
			'jspdf',
			'@floating-ui/core',
			'@floating-ui/dom',
			'centrifuge',
			'svelte-french-toast',
			'@vincjo/datatables/remote',
			'@vincjo/datatables',
			'object-to-formdata',
			'dinero.js',
			'svelte-dnd-action'
		]
	},
	plugins: [
		/*visualizer({
			emitFile: true,
			filename: "stats.html",
			template: "sunburst",
			gzipSize: true,
			brotliSize: true,
		}) as PluginOption,*/
		compression({
			algorithms: ['gzip', 'brotliCompress']
		}),
		sentrySvelteKit({
			adapter: 'node',
			autoInstrument: {
				load: true,
				serverLoad: true
			},
			autoUploadSourceMaps: false,
			sourceMapsUploadOptions: {
				release: {
					name: process.env.CI_PIPELINE_ID
				},
				org: process.env.SENTRY_ORG,
				project: process.env.SENTRY_PROJECT,
				authToken: process.env.SENTRY_AUTH_TOKEN
			}
		}),
		sveltekit()
	]
};

export default config;
