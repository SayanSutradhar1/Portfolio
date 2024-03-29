/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgMain: "url('/src/assets/bg.jpg')",
      },
      dropShadow: {
        shadow: [
          "0 35px 35px rgb(29 24 24 / 40%)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        shadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      keyframes: {
        bgChange: {
          "0%": {
            backgroundColor: "#6ecbd6",
          },
          "25%": {
            backgroundColor: "#5b6a79",
          },
          "50%": {
            backgroundColor: "#9e97d6",
          },
          "75%": {
            backgroundColor: "#569b9b",
          },
          "100%": {
            backgroundColor: "#6ecbd6",
          },
        },
        load: {
          "0%": {
            opacity: 0.3,
          },
        },
        slide: {
          "from": {
            height : "0%",
            backdropFilter : "blur(0px)"
          },
          "to":{
            height : "100%",
            backdropFilter : "blur(30px)"
          }
        },
        textGlow: {
          "0%": {
            textShadow: "0px 1px 4px cyan",
          },
          "50%": {
            textShadow: "0px 1px 4px green",
          },
          "100%":{
            textShadow: "0px 1px 4px cyan",
          }
        },
      },
      animation: {
        slide: "slide 2s ease-in-out infinite",
        load: "load 0.4s linear",
        bgChange: "bgChange 6s ease-in-out infinite",
        textGlow: "textGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
