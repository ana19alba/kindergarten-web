/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:   '#7C3AED',   /* violet kryesor */
        secondary: '#EC4899',   /* rozë */
        sunshine:  '#F59E0B',   /* amber/i verdhë */
        mint:      '#10B981',   /* jeshile/teal */
        lavender:  '#A855F7',   /* violet i lehtë */
        peach:     '#FB7185',   /* rozë-kuq */
        sky:       '#38BDF8',   /* qiellor */
        cream:     '#F5F3FF',   /* lavander shumë i lehtë - background */
        dark:      '#1E1B4B',   /* navy i errët violet */
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
        soft: '0 4px 24px rgba(124,58,237,0.08)',
        card: '0 8px 32px rgba(124,58,237,0.12)',
        glow: '0 0 32px rgba(124,58,237,0.30)',
      },
    },
  },
  plugins: [],
}
