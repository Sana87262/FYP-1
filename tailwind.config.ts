
// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   mode: "jit",
// //   theme: {
// //     extend: {
// //       fontFamily: {
// //         inter: ["Inter", "sans-serif"],
// //       },
// //       colors: {
// //         "black-100": "#2B2C35",
// //         "primary-blue": {
// //           DEFAULT: "#2B59FF",
// //           100: "#F5F8FF",
// //         },
// //         "secondary-orange": "#f79761",
// //         "light-white": {
// //           DEFAULT: "rgba(59,60,152,0.03)",
// //           100: "rgba(59,60,152,0.02)",
// //         },
// //         gray:{
// //           1000:"#747A88"
// //         },
// //         // grey: "#747A88",
// //         blue:{
// //           950:'#3fa4a1',
// //           1000:'#b2f7ec',
// //           1050:'#66B1FF',
// //           1100:'#3396ff'
// //         }

// //       },
// //       backgroundImage: {
// //         'pattern': "url('/pattern.png')",
// //         'hero-bg': "url('/hero-bg.png')"
// //       }
// //     },
// //   },
// //   plugins: [],
// // };

// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors:{
//         secondary: "#8696a0",
//           "teal-light": "#7ae3c3",
//           "gray":"#808080",
//           "red-500":"#F44336",
//           "photopicker-overlay-background": "rgba(30,42,49,0.8)",
//           "dropdown-background": "#233138",
//           "dropdown-background-hover": "#182229",
//           "input-background": " #2a3942",
//           "primary-strong": "#e9edef",
//           "panel-header-background": "#202c33",
//           "panel-header-icon": "#aebac1",
//           "icon-lighter": "#8696a0",
//           "icon-green": "#00a884",
//           "search-input-container-background": "#111b21",
//           "conversation-border": "rgba(134,150,160,0.15)",
//           "conversation-panel-background": "#0b141a",
//           "background-default-hover": "#202c33",
//           "incoming-background": "#202c33",
//           "outgoing-background": "#005c4b",
//           "bubble-meta": "hsla(0,0%,100%,0.6)",
//           "icon-ack": "#53bdeb",
//           "white":"#FFFFFF",
//           "black":"#000000"
//       }
//     },
//       // colors:{
//       //   blue:{
//       //     950:'#3fa4a1',
//       //     1000:'#b2f7ec',
//       //     1050:'#66B1FF',
//       //     1100:'#3396ff',
//       //   }
//       // },
//       gridTemplateColumns: {
//         main: "1fr 2.4fr",
//       },

//     },
//   },

//   plugins: [],
// }
// export default config
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "chat-background": "url('/chat-bg.png')",
      },
      screens: {
        xs: "320px", 
      },
      gridTemplateColumns: {
        main: "1fr 2.4fr",
      },
    },
    colors:{
      secondary: "#8696a0",
        "teal-light": "#7ae3c3",
        "gray":"#808080",
        "red-500":"#F44336",
        "photopicker-overlay-background": "rgba(30,42,49,0.8)",
        "dropdown-background": "#233138",
        "dropdown-background-hover": "#182229",
        "input-background": " #2a3942",
        "primary-strong": "#e9edef",
        "panel-header-background": "#202c33",
        "panel-header-icon": "#aebac1",
        "icon-lighter": "#8696a0",
        "icon-green": "#00a884",
        "search-input-container-background": "#111b21",
        "conversation-border": "rgba(134,150,160,0.15)",
        "conversation-panel-background": "#0b141a",
        "background-default-hover": "#202c33",
        "incoming-background": "#202c33",
        "outgoing-background": "#005c4b",
        "bubble-meta": "hsla(0,0%,100%,0.6)",
        "icon-ack": "#53bdeb",
        "white":"#FFFFFF",
        "black":"#000000"
    }
  },
  plugins: [],

};
export default config;

