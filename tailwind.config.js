/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        brand: {
          indigo: '#6366F1',
          purple: '#8B5CF6',
          emerald: '#10B981',
        },
        cardBg: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'text-gradient': 'text-gradient 6s ease infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'dash': 'dash 25s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'pulse-glow': {
          '0%': { opacity: 0.05, transform: 'scale(1) translate(-50%, -50%)' },
          '100%': { opacity: 0.15, transform: 'scale(1.2) translate(-45%, -45%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'dash': {
          to: { 'stroke-dashoffset': '-1000' },
        },
      },
    },
  },
  plugins: [],
}
