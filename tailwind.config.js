/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        sm: '700px',
        md: '1030px',
        large : '1500px',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter'],
        inter2: ['Inter2'],
        act_of_rejections: ['Act_of_rejections'],
      },
      colors: {
        'primary-100':'var(--primary-100)',             
        'primary-200':'var(--primary-200)',
        'primary-300':'var(--primary-300)',
        'primary-400':'var(--primary-400)',
        'secondary-100':'var(--secondary-100)',
        'secondary-200':'var(--secondary-200)',
        'light':'var(--white)',
        'dark':'var(--black)',
      },
      width:{
        "card":'412px',
        "card-md": '350px',
        "card-half":'250px',
        "card-sm":'200px',
        "card-xs":'80px',
        "card-lg":'612px',
        "card-lg-half":'300px'
      },
      height:{
        "card":'412px',
        "card-md": '350px',
        "card-half":'250px',
        "card-sm":'200px',
        "card-xs":'150px',
        "card-lg":'612px',
        "card-lg-half":'300px'
      },
      textStrokeWidth: {
        'default': '1px',
        '2': '2px',
        '4': '4px',
      },
      textStrokeColor: {
        'black': '#000',
      },
      backgroundImage: {
        'custome-linear-one': 'linear-gradient(90deg, #EC3339 0%, #BB1117 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '0.5px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-4': {
          '-webkit-text-stroke': '4px black',
        },
      });
    },
  ],
}