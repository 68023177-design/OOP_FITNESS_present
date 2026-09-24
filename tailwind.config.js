/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mitr', 'Sukhumvit Set', 'IBM Plex Sans Thai', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        'orb-1': 'orb1 16s ease-in-out infinite',
        'orb-2': 'orb2 20s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-dot': 'pulseDot 2.2s ease-in-out infinite',
      },
      keyframes: {
        orb1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, -40px) scale(1.15)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-60px, 50px) scale(0.9)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
};