/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        diamanti: {
          ivory: '#F6F2EB',
          sand: '#DCC7A6',
          navy: '#153248',
          sea: '#5F7D86',
          stone: '#D7D3CC',
          terracotta: '#B97A5B',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        body: ['Manrope', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 35px rgba(21, 50, 72, 0.08)',
      },
    },
  },
  plugins: [],
}
