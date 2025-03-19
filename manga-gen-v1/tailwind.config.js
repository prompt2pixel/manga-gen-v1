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
        manga: {
          light: '#FFFFFF',
          gray: '#E5E5E5',
          dark: '#2D2D2D',
          accent: '#4A4A4A',
        }
      },
      fontFamily: {
        barriecito: ['var(--font-barriecito)', 'cursive'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      transitionProperty: {
        'filter': 'filter',
      },
      boxShadow: {
        'manga': '4px 4px 0 #2D2D2D',
        'manga-hover': '6px 6px 0 #2D2D2D',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.writing-vertical-rl': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        },
      };
      addUtilities(newUtilities);
    },
  ],
} 