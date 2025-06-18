/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		auth: import('$lib/types/auth').VerifyUser;
		userPermissions: any;
	}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
	// interface PageData {}
}

declare const __DATE__: string;
declare const __RELOAD_SW__: boolean;

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		onSchedulerExpandAll?: () => void;
		onSchedulerCollapseAll?: () => void;
		onGanttExpandAll?: () => void;
		onGanttCollapseAll?: () => void;
		onGanttCollapseSubprojects?: () => void;
		onGanttCollapseGroups?: () => void;
		onSyncStarted?: (event: CustomEvent) => void;
		onSyncErrors?: (event: CustomEvent) => void;
		onSyncFinished?: (event: CustomEvent) => void;
		onPdfRenderingReady?: () => void;
	}
}

// See https://svelte.dev/blog/view-transitions
// Since startViewTransition is not supported by all browsers
// we need to declare it here
interface ViewTransition {
	updateCallbackDone: Promise<void>;
	ready: Promise<void>;
	finished: Promise<void>;
	skipTransition: () => void;
}

interface Document {
	startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
}
