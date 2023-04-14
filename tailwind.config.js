/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;',
        }
      },
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'serif'],
        robotoSlab: ["Roboto Slab", "serif"],
        roboto: ["Roboto", "sans-serif"]
      },
    }
  },
  plugins: [],
}
