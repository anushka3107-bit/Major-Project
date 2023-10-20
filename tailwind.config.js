/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          "15%": {
            transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
          },
          "30%": {
            transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
          },
          "45%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },
          "60%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
          },
          "75%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        wobble: "wobble 3s infinite",
        "marquee-infinite": "marquee 15s linear infinite",
        "marquee2-infinite": "marquee2 15s linear infinite",
      },
      colors: {
        lilac: "#E5BEEC",
        cPink: "#ECCDB4",
        cBackgroundBlue: "#79E0EE",
        cSearchIcon: "#FC4F00",
        cSearchText: "#DB005B",
        cBackgroundColor: "#FFE3E1",
        cTextColorShop: "#9B0000",
        cHoverColorOrange: "#E55807",
        cFilterColor: "#FFC7C7",
        cFilterHoverColor: "#FFE2E2",
        cTextColor: "#79E0EE",
        cGradientFirst: "#3E5151",
        cGradientSecond: "#DECBA4",
        cNavbar: "#111413",
        cSearchBar: "#ffcacc",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
