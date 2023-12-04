import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			default: ['Poppins', 'Arial', 'sans-serif'],
		},
		fontSize: {
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '2rem', // 32px
			'4xl': '2.5rem', // 40px
			'5xl': '3rem', // 48px
		},
		lineHeight: {
			none: '1',
			s: '1.25',
			m: '1.4',
			l: '1.45',
		},
		fontWeight: {
			medium: '500',
			semiBold: '600',
			bold: '700',
		},
		borderWidth: {
			1: '1px',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
		},
		borderRadius: {
			none: 0,
			s: '8px',
			m: '16px',
			l: '24px',
			full: '9999px',
		},
		extend: {
			colors: {
				transparent: 'transparent',
				white: '#ffffff',
				black: '#000000',
				error: '#FF0000',
				primary: colors.violet,
				secondary: colors.pink,
				base: colors.slate,
			},
			spacing: {
                '0': '0px',
				xxs: '4px',
				xs: '8px',
				s: '16px',
				m: '24px',
				l: '32px',
				xl: '48px',
				xxl: '64px',
			},
		},
	},
	plugins: [
		/**
		 * @description custom tailwind utilities
		 * Inspiration for this approach is taken from https://tailwindcss.com/docs/adding-custom-styles#writing-plugins
		 */
		plugin(function ({ addUtilities, theme }) {
			addUtilities({
				'.mb-bg-gradient': {
					transition: 'background 0.3s ease-out',
					background: `linear-gradient(90deg, ${theme('colors.secondary.500')} 0%, ${theme(
						'colors.primary.600',
					)} 100%)`,
				},
				'.mb-bg-gradient-hover': {
					transition: 'background 0.3s ease-out',
					background: `linear-gradient(90deg, ${theme('colors.secondary.600')} -12.56%, ${theme(
						'colors.primary.500',
					)} 62.92%)`,
				},
				'.mb-bg-gradient-active': {
					transition: 'background 0.3s ease-out',
					background: `linear-gradient(90deg, ${theme('colors.secondary.600')} -15.33%, ${theme(
						'colors.primary.500',
					)} 38.87%)`,
				},
				'.mb-font-h1': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.5xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.s'),
				},
				'.mb-font-h2': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.4xl'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: theme('lineHeight.s'),
				},
				'.mb-font-h3': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.3xl'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.s'),
				},
				'.mb-font-h4': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.2xl'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.s'),
				},
				'.mb-font-paragraph-l': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.2xl'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.l'),
				},
				'.mb-font-paragraph-m': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.lg'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.m'),
				},
				'.mb-font-label-xl': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.2xl'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.none'),
				},
				'.mb-font-label-l': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.xl'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.none'),
				},
				'.mb-font-label-m': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.base'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.none'),
				},
				'.mb-font-label-s': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.sm'),
					fontWeight: theme('fontWeight.semiBold'),
					lineHeight: theme('lineHeight.none'),
				},
				'.mb-font-placeholder': {
					fontFamily: theme('fontFamily.default'),
					fontSize: theme('fontSize.base'),
					fontWeight: theme('fontWeight.medium'),
					lineHeight: theme('lineHeight.none'),
				},
			});
		}),
	],
};
