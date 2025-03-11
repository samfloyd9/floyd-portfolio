// import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};

// Google Fonts - Orbital and Righteous

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       keyframes: {
//         zoom: {
//           '0%': { transform: 'scale(1)' },
//           '100%': { transform: 'scale(1.5)' },
//         },
//       },
//       animation: {
//         zoom: 'zoom 10s alternate infinite',
//       },
//       boxShadow: {
//         custom: '-24vw -44vh 2px 2px #fff, 38vw -4vh 0px 0px #fff, -20vw -48vh 1px 2px #fff, -39vw 38vh 3px 1px #fff, -42vw -11vh 0px 3px #fff, 12vw 15vh 3px 3px #fff, 42vw 6vh 3px 2px #fff, -8vw 9vh 0px 2px #fff, 34vw -38vh 1px 0px #fff, -17vw 45vh 3px 1px #fff, 22vw -36vh 3px 2px #fff, -42vw 1vh 1px 0px #fff',
//       },
//     },
//   },
//   plugins: [],
// };
