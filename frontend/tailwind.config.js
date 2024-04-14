/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'menu-slide': 'menu-slide 0.3s ease-in-out forwards',
      },
      translate: {
        '1/2': '50%',
      },
      keyframes: {
        'menu-slide': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

