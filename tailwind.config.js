/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        half: "50vw",
      },
      height: {
        inherit: "inherit",
      },
      colors: {
        "card-black": "#252525",
        "card-red": "#E83E4A",
        "card-green": "#2ABB98",
        "land-red": "#E83E4A",
        "footer-border": "#D0D5DD",
      },
      padding: {
        neg: "-6rem",
      },
      keyframes: {
        scroll: {
          "0% ,100%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(8px)",
          },
          "75%": {
            transform: "translateY(-8px)",
          },
        },
        screen: {
          "0% ": {
            transform: "translateY(-311px)",
          },
          "40%": {
            transform: "translateY(0vh)",
          },
          "100%": {
            transform: "translateY(-150vh)",
          },
        },
        plane: {
          "0%": {
            transform: "translateX(100vw) translateY(-50%)",
          },
          // "50%":{
          //   transform: "translateX(0) translateY(-50%)"
          // },
          "100%": {
            transform: "tranalateX(-100vw) translateY(-50%)",
          },
        },
        scroll1: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(calc(-160px * 8))",
          },
        },
        scroll2: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(calc(160px * 8))",
          },
        },
        rightToLeft: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        downToTop:{
          from: {transform: "translateY(50%)"},
          to:{transform:"translateY(0%)"}
        },
        downToTop2:{
          from: {transform: "translateY(100%)"},
          to:{transform:"translateY(0%)"}
        },
        downToTop3:{
          from: {transform: "translateX(100%)"},
          to:{transform:"translateX(0%)"}
        }
        
      },
      animation: {
        scroll: "scroll 1.5s ease-in-out infinite",
        screen: "screen 2s ease-in-out",
        plane: "plane 6s ease-in-out infinite",
        scroll1: "scroll1 40s linear infinite",
        scroll2: "scroll2 40s linear infinite",
        rightToLeft: "rightToLeft 100s linear infinite ",
        downToTop: "downToTop2 1s ease",
        downToTop2: "downToTop2 1.5s ease",
        downToTop3: "downToTop 1s ease",
        downToTop4: "downToTop3 0.5s ease",

      },
    },
  },

  plugins: [],
};


      