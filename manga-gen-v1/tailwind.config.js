/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        gold: '#ffd700',
      },
      fontFamily: {
        bangers: ['var(--font-bangers)'],
        comic: ['var(--font-comic)'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      transitionProperty: {
        'filter': 'filter',
      },
      boxShadow: {
        'manga': '4px 4px 0 #000000',
        'manga-hover': '6px 6px 0 #000000',
      },
    },
  },
  plugins: [],
} 