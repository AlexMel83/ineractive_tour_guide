/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  jit: true,
  theme: {
    extend: {
      colors: {
        'custom-black': '#090402',
        'custom-gray': '#A39F9D',
        'custom-orange': '#FF5500',
        'custom-white': '#F5F5F5',
        'custom-dark': '#080301',
        'custom-border': '#5C5C5C',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
    screens: {
      xs: '440px',
      'sm-md': '830px',
      ...defaultTheme.screens,
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      500: 500,
      auto: 'auto',
    },
  },
  plugins: [],
};
