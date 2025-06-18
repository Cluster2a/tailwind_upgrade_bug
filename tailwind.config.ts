import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		supports: {
			'backdrop-blur': 'backdrop-filter: blur()'
		},
		screens: {
			xxs: '300px',
			xs: '475px',
			...defaultTheme.screens,
			tall: { raw: '(min-height: 800px)' }
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				mono: ['"Overpass Mono"', ...defaultTheme.fontFamily.mono],
				serif: ['"Merriweather Sans"', ...defaultTheme.fontFamily.serif]
			},
			colors: {
				blue: {
					50: '#EBF8FF',
					100: '#D1EFFF',
					200: '#A3DFFF',
					300: '#5CC6FF',
					400: '#00A2FA',
					500: '#0077B6', // freispace blue
					600: '#006AA3',
					700: '#005D8F',
					800: '#00507A',
					900: '#003552'
				}
			},
			borderWidth: {
				6: '6px'
			},
			fontSize: {
				xxs: '.7rem',
				sm: '.9rem'
			},
			height: {
				sel: '2.625rem'
			},
			margin: {
				'64px': '64px',
				'61px': '61px',
				'256px': '256px'
			},
			zIndex: {
				60: '60',
				70: '70'
			},
			backgroundImage: {
				'page-gradient':
					'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 122, 201, 0.5), transparent)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('flowbite/plugin')
	]
} satisfies Config;
