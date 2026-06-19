/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07111f',
        bg2: '#0b1728',
        green: '#39d98a',
        blue: '#45b7ff',
        purple: '#a78bfa',
        yellow: '#ffd166',
        orange: '#fb923c',
        red: '#fb7185',
        deep: '#06101d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
