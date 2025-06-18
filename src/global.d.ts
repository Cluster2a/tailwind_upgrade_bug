/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
	STAGE: string;
	VERSION: string;
	// STANDALONE_BILLING_APP
	IS_STANDALONE_BILLING_APP: string;
	API_URL: string;
	API_SAML_URL: string;
	NODE_ENV: string;
	DEV_AUTO_LOGIN: string;
	DEV_LOGIN_EMAIL: string;
	DEV_LOGIN_PASSWORD: string;
	MESSAGING_SERVICE_URL_WEBSOCKETS: string;
	MESSAGING_SERVICE_URL_SSE: string;
	MATOMO_TRACKING_URL: string;
	SENTRY_DSN: string;
	SENTRY_ENVIRONMENT: string;
	SENTRY_TRACES_SAMPLE_RATE: string;
	SENTRY_REPLAYS_SESSION_SAMPLE_RATE: string;
	SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE: string;
}

interface Window {
	DayPilot: any;
}
