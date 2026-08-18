/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pilar: {
          red: '#B72527',        // Vermelho principal da marca
          terracotta: '#853536',   // Vermelho queimado / terracota
          wine: '#523132',         // Vinho escuro
          charcoal: '#332929',     // Marrom-grafite quase preto (âncora)
          bg: '#F5F3F2',           // Offwhite neutro para respiro
          card: '#FFFFFF',         // Fundo de cards
          border: '#E2DDD9'        // Borda suave
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          dark: '#128C7E'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'pilar-sm': '0 2px 8px rgba(51, 41, 41, 0.06)',
        'pilar-md': '0 4px 16px rgba(51, 41, 41, 0.1)',
        'pilar-lg': '0 8px 30px rgba(51, 41, 41, 0.15)',
        'glow-red': '0 0 20px rgba(183, 37, 39, 0.25)',
        'glow-green': '0 0 20px rgba(37, 211, 102, 0.35)'
      }
    },
  },
  plugins: [],
}
