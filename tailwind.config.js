/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,svg}", "!./node_modules"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          'Geologica',
          {
            fontVariationSettings: '"CRSV" 1, "SHRP" 100'
          }
        ],
        nj: 'NJTD-Regular',
        njb: 'NJTD-Bold',
        spart: 'League Spartan',
        goth: 'League Gothic',
        rale: 'Raleway',
        pop: 'Poppins'
      },
    },
  },
  plugins: [],
}

