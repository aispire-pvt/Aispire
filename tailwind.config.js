/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#f37124',
          accent: '#f06222',
        },
        dark: {
          900: '#000000',
          800: '#050505',
          700: '#0a0a0a',
          600: '#111111',
          500: '#1a1a1a',
        },
        greyed: '#606060',
      },
      fontFamily: {
        sans: ['"Avenir Next LT Pro"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Roc Grotesk"', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
