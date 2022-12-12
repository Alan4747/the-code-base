/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        md: '1.25rem',
        lg: '2.5rem',
        xl: '2.5rem',
        '2xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
