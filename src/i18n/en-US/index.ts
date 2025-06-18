import en from '../en';
import { extendLanguage } from '../i18n-extend';

const en_US = extendLanguage(en, {
	meta: {
		footer: {
			contact: 'Contact',
			linkContact: 'https://freispace.com/en-us/contact/',
			legal: 'Legal',
			linkLegal: 'https://freispace.com/en-us/legal/',
			privacyPolicy: 'Privacy Policy',
			linkPrivacyPolicy: 'https://freispace.com/en-us/privacy-policy/',
			termsOfService: 'Terms of Service',
			linkTermsOfService: 'https://freispace.com/de/agb/',
		},
		legal: {
			linkToms: 'https://freispace.com/dl/gdpr/freispace-technical-and-organisational-measures.pdf',
		},
	},
	analytics: {
		timeRecords: {
			content: {
				tooltips: {
					vacationDay: 'Vacation',
					vacationHalfDay: 'Half-day vacation ({daytime|{morning: morning, afternoon: afternoon}})',
				}
			},
		},
		utilization: {
			general: {
				title: 'Utilization Analytics',
			},
			content: {
				chartUtilization: {
					title: 'Utilization',
				},
				export: {
					title: 'Utilization',
					keywords: 'freispace, analytics, utilization',
					filename: 'freispace-utilization-{dateNow}',
				},
			},
		},
		vacationOverview: {
			content: {
				banner: {
					infoText: 'This view only shows vacations and absences that do not require a time tracking entries. (E.g. home office is not shown)',
				},
				vacationDays: 'Vacations',
			},
		},
	},
	clients: {
		settings: {
			groups: {
				labels: {
					color: 'Color',
				},
			},
		},
	},
	groups: {
		index: {
			content: {
				headers: {
					color: 'Color',
				},
			},
		},
	},
	inventoryItems: {
		settings: {
			groups: {
				labels: {
					color: 'Color',
				},
			},
		},
	},
	staff: {
		vacationDays: {
			general: {
				title: 'Vacation quotas',
				shortTitle: 'Vacations',
			},
			table: {
				vacationDays: 'Vacation days',
				balance: 'Vacation days',
			},
		},
		index: {
			buttons: {
				vacationDays: 'Set vacation quotas',
			},
		},
	},
	team: {
		team: {
			administration: {
				teamDeletion: {
					longDescription: '<p>Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.</p><p>If you have an active subscription, it will be canceled to the earliest date. You will still be billed until your team\'s subscription ends.</p>',
				},
			},
			billing: {
				billingInvoices: {
					content: {
						alerts: {
							checkoutCanceled: 'Your payment has been canceled. Please contact us for more information.',
						},
					},
				},
			},
			privacy: {
				title: 'CCPA & Privacy',
				compliance: {
					title: 'CCPA compliance',
					compliantText: 'freispace is 100% CCPA compliant.',
					headerDataLocation: 'Data location',
					contentDataLocation: 'Germany',
				},
			},
			settings: {
				bookings: {
					plannerDisplaySettings: {
						shortDescription: 'Display settings for bookings in the planner. Determines the coloring and labeling of bookings. Can be overwritten by custom views.',
					}
				},
			},
		},
		_layout: {
			tabs: {
				privacy: 'CCPA & Privacy',
			},
		},
	},
	timeTracking: {
		vacation: {
			title: 'Vacations',
			headerVacationTimes: 'Vacations',
		},
	},
	components: {
		absences: {
			absenceForm: {
				tabVacation: 'Vacations',
				errorVacationInTimeframe: 'Not saved, as vacations already exists in the given time frame.',
				errorVacationAllowanceDepleted: 'Not enough vacation days left.',
			},
			vacationDaysOverview: {
				title: 'Vacations',
				vacationDays: 'Vacation days',
				remainder: 'Remaining vacations',
			},
		},
		bookings: {
			modal: {
				editNewModal: {
					tabs: {
						details: {
							color: 'Color',
						},
					},
					collisionAlerts: {
						resourceAbsenceHoliday: 'Vacation',
					},
				},
			},
			multiModal: {
				index: {
					content: {
						color: 'Color',
					},
				},
			},
		},
		customFields: {
			globalFieldsForm: {
				list: {
					types: {
						color: 'Color',
					},
				},
				form: {
					types: {
						color: 'Color',
					},
				},
			},
		},
		dashboard: {
			chart: {
				utilization: 'Utilization',
			},
		},
		ganttItem: {
			modal: {
				editNewModal: {
					content: {
						color: 'Color',
					},
				},
			},
		},
		groups: {
			editNewGroupModal: {
				content: {
					color: 'Color',
				},
			}
		},
		header: {
			notifications: {
				notification: {
					teamInvitationCancelled: '{userName} has canceled your {teamName} invite.',
				},
			},
		},
		navigation: {
			items: {
                staffVacationDays: 'Vacation quotas',
				utilization: 'Utilization',
			},
		},
		planner: {
			plannerBookingDisplaySettings: {
				bookingColors: 'Booking colors',
				bookingColorsDescription: 'Individual coloring for bookings. The colors are assigned in the specified order. Specify as a comma-separated list.',
				variables: {
					bookingColor: 'Booking color',
					statusColor: 'Status color',
					projectColor: 'Project color',
					projectParentColor: 'Parent project color',
					suitesList: 'Suites/Rooms (colors & names)',
					suitesColorsOnly: 'Suite/Room colors',
				},
			},
			plannerViewModal: {
				content: {
					customization: 'Customization',
				},
			},
		},
		presences: {
			workingTimesYearOverview: {
				vacationDays: 'Vacation days',
				dayPopup: {
					vacation: 'Vacations',
				},
			},
		},
		projects: {
			addSubprojectsModal: {
				description: 'Subprojects help organize episodic productions and versions. Subprojects receive the same color as their parent project, however color and details may be changed after creation.',
			},
			editNewForm: {
				content: {
					color: 'Color',
				},
			},
		},
		resources: {
			editNewForm: {
				content: {
					color: 'Color',
				},
			},
		},
		shared: {
			svelteSelect: {
				resourceAbsenceHoliday: 'Vacations',
			}
		},
		sites: {
			editNewForm: {
				postalCode: 'ZIP',
			},
		},
		suites: {
			editNewForm: {
				color: 'Color',
			},
		},
		teams: {
			administration: {
				editNewTenantForm: {
					content: {
						connectionNameDescription: 'The name of the identity provider. This should be a name that your users recognize, as it is shown on the login.',
					},
				},
			},
			settings: {
				bookingStatus: {
					color: 'Color',
				},
			},
			integrations: {
				screens: {
					editNewScreenForm: {
						content: {
							colorBackground: 'Background color',
							colorText: 'Text color',
							colorMessageBackground: 'Background color of message box',
						},
					},
				},
			},
		},
		roles: {
			modals: {
				editNewModal: {
					content: {
						color: 'Color',
					},
				},
			},
		},
		vCards: {
			formAddresses: {
				postalCode: 'ZIP',
			},
			formCompany: {
				companyNamePlaceholder: 'e.g. ACME Inc.',
			},
			formContactDetails: {
				numberPlaceholder: '+1 123 456 789',
				types: {
					cell: 'Cell',
				},
			},
		},
	},
	helpers: {
		planning: {
			dayPilot: {
				headers: {
					utilization: 'Utilization',
				},
				bubbles: {
					vacation: 'Vacations',
				},
			},
		},
	},
	utils: {
		alerts: {
			confirmRemovingTeamInvite: {
				title: 'Confirm cancelling invitation',
			},
			confirmTimeTrackingVacationDeletion: {
				title: 'Delete vacation entry?',
				contentStart: 'Do you want to delete the vacation entry on <b>{start}</b>?',
				contentStartEnd: 'Do you want to delete the vacation entry from <b>{start}</b> to <b>{end}</b>?',
			},
		},
		toasts: {
			removingInviteFailed: 'Error cancelling team invite.',
			timeTrackingVacationRecordCreationSuccessful: 'Vacation saved.',
			timeTrackingVacationRecordUpdateSuccessful: 'Vacation updated.',
			timeTrackingVacationRecordConflict: 'Vacation within time frame.',
			vacationDaysSaveSuccessful: 'Vacation days saved.',
		},
		vCards: {
			types: {
				contact: {
					cell: 'Cell',
				},
			},
		},
	},
});

export default en_US