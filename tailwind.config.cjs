/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#a855f7',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      dropShadow: {
        glow: '0 0 40px rgba(168, 85, 247, 0.35)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(168,85,247,0.12), transparent 30%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.12), transparent 25%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.1), transparent 30%)',
      },
    },
  },
  plugins: [],
};
