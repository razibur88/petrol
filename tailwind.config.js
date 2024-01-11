/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px"
      },
      backgroundColor:{
        headerbg:"#282828"
      },
      colors:{
        headerIcon:"red"
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
      },
      // backgroundImage:{
      //   ban:{url(../assets/banner.png)}
      // }
    },
  },
  plugins: [],
}


