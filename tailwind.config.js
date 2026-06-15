/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Pontus" — Black Sea heritage palette (Sozopol limestone + petrol-teal + brass).
        diamanti: {
          ink: '#0B2A2E', // primary text / darkest sections
          sea: '#114B45', // brand deep petrol-teal
          seaSoft: '#1E6B62', // lighter teal for gradients / hovers
          limestone: '#F2ECDF', // warm bone page background
          mist: '#9FB2AC', // sage sea-mist for borders / muted UI
          brass: '#BD8A3C', // CTA / conversion accent
          brassDeep: '#A6772F', // darker brass for hover / AA on light text
          coral: '#C75C42', // Apollonia coral — decorative fills / icons only
          coralDeep: '#A2412B', // AA-safe coral for small eyebrow / label text on light
          shell: '#FBFAF6', // near-white card surface
          sand: '#E7DEC9', // soft limestone-deep for alternating bands

          // Legacy aliases remapped onto the new palette so any residual
          // class reference stays on-brand and the build never breaks.
          ivory: '#F2ECDF',
          navy: '#0B2A2E',
          stone: '#E7DEC9',
          terracotta: '#C75C42',
        },
      },
      fontFamily: {
        display: ['Prata', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['Commissioner', '"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -20px rgba(11, 42, 46, 0.30)',
        lift: '0 34px 70px -30px rgba(11, 42, 46, 0.45)',
        brass: '0 14px 34px -12px rgba(189, 138, 60, 0.55)',
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
    },
  },
  plugins: [],
}
