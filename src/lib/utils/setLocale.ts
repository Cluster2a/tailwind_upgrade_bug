import { setLocale as _setLocale } from '$i18n/i18n-svelte';
import type { Locales } from '$i18n/i18n-types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { Settings } from 'luxon';

export const setLocale = async (locale: Locales): Promise<void> => {
	await loadLocaleAsync(locale);
	_setLocale(locale);
	Settings.defaultLocale = locale;
	document.documentElement.lang = locale;
};
