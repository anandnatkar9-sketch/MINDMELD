/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sih: {
          saffron: '#EA580C',
          emerald: '#059669',
        },
        civic: {
          blue: '#2563EB',
          dark: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}