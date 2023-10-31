/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px'
    }
  },
  plugins: [],
}