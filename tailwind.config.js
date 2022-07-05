module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "diez": "10%",
      },
      colors: {
        paleta: {
          100: '#323E40',
          200: '#F2A922',
          300: '#D98014',
          400: '#732002',
          500: '#D9501E',
          600: '#60A5FA',
          instagram: '#FE2951',
          youtube: '#cd201f',
          facebook: '#3b5998',
        },
      },
      transitionProperty: {
        'height': 'height, max-height ',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
