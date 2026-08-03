/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        ink: '#171F17',
        orange: {
          DEFAULT: '#E15A17',
          light: '#F0833F',
          dark: '#B8460D',
        },
        forest: {
          DEFAULT: '#1E5631',
          light: '#2F7A3E',
          dark: '#123320',
        },
        lime: '#9FD858',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'diagonal-stripe': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
