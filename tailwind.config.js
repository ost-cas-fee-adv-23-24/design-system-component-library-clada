import colors from 'tailwindcss/colors';
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      error: '#FF0000',
      primary: colors.violet,
      secondary: colors.pink,
      base: colors.slate,
    },
    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px'
    },
    extend: {},
  },
  plugins: [
    /**
     * @description custom tailwind utilities
     * Inspiration for this approach is taken from https://tailwindcss.com/docs/adding-custom-styles#writing-plugins
     */
    plugin(function ({addUtilities, theme}) {
      addUtilities({
        '.mb-bg-gradient': {
          background:  `linear-gradient(90deg, ${theme('colors.secondary.500')} 0%, ${theme('colors.primary.600')} 100%)`
        },
        '.mb-bg-gradient-hover': {
          background: `linear-gradient(90deg, ${theme('colors.secondary.600')} -12.56%, ${theme('colors.primary.500',)} 62.92%)`,
        },
        '.mb-bg-gradient-focus': {
          background: `linear-gradient(90deg, ${theme('colors.secondary.600')} -15.33%, ${theme('colors.primary.500')} 38.87%)`,
        }
      })
    })
  ],
}