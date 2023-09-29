/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
      },
      animation: {
        show: 'show 2.5s',
      },
    },
  },
  plugins: [],
}

