/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],    theme: {
    
    extend: {
     
      screens: {
        xs: '300px',
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'dmserif': [ "DM Serif Display"]
       
    },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'orange-dark': '#EAD9C9',
        'brown': '#BC8164',
        'brown-light': '#FFEEE5',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'yellow-light': '#FBF8F1',
        'gray-dark': '#273444',
        'gray': '#595959',
        'gray-light': '#d3dce6',
        'light-dark': '#787878'

      },
      height:{
        '900': '900px',
        '820': '820px',
        '800': '800px',
        '780': '780px',
        '750': '750px',
        '740': '740px',
        '720': '720px',
        '640': '620px',
        '500': '500px',
        '450': '450px'
      },

      maxHeight:{
        '920': '920px',

        '900': '900px',
        '840': '840px',
        '820': '820px',
        '800': '800px',
        '780': '780px',
        '750': '750px',
        '740': '740px',
        '720': '720px',
        '640': '620px',
        '500': '500px',
        '450': '450px'
      },
      width:{
        '273': '273px',
        '300': '300px',
        '330': '330px',
        '600': '600px',
        '650': '650px',
        '500': '500px'
      },
      maxWidth:{
        '273': '273px',
        '300': '300px',
        '330': '330px',
        '600': '600px',
        '650': '650px',
        '500': '500px'
      },
      fontSize:{
        '32':'32px'
      },
      aspectRatio:{
        '3/4': '3/4'
      }

    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

