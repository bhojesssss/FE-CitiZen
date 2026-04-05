/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F1F8F1',
          100: '#DDEEDF',
          DEFAULT: '#388E3C', // The main green from original CSS
          dark: '#2E7D32',
          darker: '#1B5E20',
          light: '#4CAF50',
          accent: '#8BC34A', // Secondary green button color
          blob1: '#C5E1A5'
        }
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'blob-delay': 'blob 7s infinite 2s'
      }
    },
  },
  plugins: [],
}
