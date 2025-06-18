import type { Locales } from '$i18n/i18n-types';
import { detectLanguage } from '$lib/utils/detectLanguage';
import { setLocale } from '$lib/utils/setLocale';

export const loadLocale = async (): Promise<void> => {
	const currentUserLanguage = detectLanguage();
	const lang: Locales = currentUserLanguage as Locales;
	await setLocale(lang);
	document.documentElement.lang = lang;
};
