<script lang="ts">
	import { browser } from '$app/environment';
    import { loadLocale } from '$lib/utils/loadLocale';
    import LL from '$i18n/i18n-svelte';
	import '$src/app.css';
	import '@fontsource/merriweather-sans/600.css';
	import '@fontsource/overpass-mono/400.css';
	import '@fontsource/poppins/400-italic.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import { onMount } from 'svelte';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	let localesLoaded = $state(false);

	onMount(async () => {
		if (browser) {
			// set language
			await loadLocale();
			localesLoaded = true;
		}
	});
</script>

<!-- as i18 is being loaded on client and it is currently not properly working with actions (use: vCardTypeFormatContact), we use this as a workaround -->
{#if localesLoaded === true && $LL.language_de && $LL.language_de()}
	<main>
		<div class="relative flex min-h-screen min-w-0 flex-1 flex-col">
			<svelte:boundary>{@render children?.()}</svelte:boundary>
			<div class="absolute bottom-0 right-0 p-1.5 text-xxs text-gray-400">
				&copy;<span class="hidden print:inline">&nbsp;freispace GmbH</span>
			</div>
		</div>
	</main>
{/if}
