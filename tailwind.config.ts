import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    theme: {
      extend: {
        colors: {},
      },
      screens: {
        'xs': '548px',
        // => @media (min-width: 548px) { ... }
        ...defaultTheme.screens
      }
    },
    plugins: [],
  }