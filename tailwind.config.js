
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'challenger-orange': '#FF6B00',
        'chrome': '#C0C0C0',
        'garage': '#0a0a0a',
        'brake-red': '#CC0000',
        'form-yellow': '#EAB308',
        'form-green': '#22C55E',
        'off-white': '#F5F5F5',
        'muted-metal': '#888888',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'rajdhani': ['"Rajdhani"', 'sans-serif'],
        'tech': ['"Share Tech Mono"', 'monospace'],
      },
      backgroundImage: {
        'carbon': 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
      },
      boxShadow: {
        'glow-orange': '0 0 15px rgba(255, 107, 0, 0.3)',
        'glow-red': '0 0 15px rgba(204, 0, 0, 0.4)',
        'glow-yellow': '0 0 15px rgba(234, 179, 8, 0.4)',
        'glow-green': '0 0 15px rgba(34, 197, 94, 0.4)',
      }
    },
  },
  plugins: [],
}
