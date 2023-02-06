const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      container: {
          center: true,
          padding: '2rem'
      },
      fontFamily: {
          sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
          mono: ['"Ubuntu Mono"', ...defaultTheme.fontFamily.mono]
      },
  },
}