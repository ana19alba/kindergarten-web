/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:   '#FF6B6B',
        secondary: '#4ECDC4',
        sunshine:  '#FFD93D',
        mint:      '#6BCB77',
        lavender:  '#A78BFA',
        peach:     '#FFA07A',
        sky:       '#48CAE4',
        cream:     '#FFF8F0',
        dark:      '#2D3748',
      },
      fontFamily: {
        display: ['"Nunito"', 'sans-serif'],
        body:    ['"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.08)',
        card: '0 8px 32px rgba(0,0,0,0.10)',
        glow: '0 0 32px rgba(255,107,107,0.25)',
      },
    },
  },
  plugins: [],
}
