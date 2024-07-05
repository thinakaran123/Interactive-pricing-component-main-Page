/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      listStyleImage: {
        ticklist: 'url("images/icon-check.svg")',
      },
      colors: {
        softcyan: "hsl(174, 77%, 80%)",
        strongcyan: "hsl(174, 86%, 45%)",
        lightgrayishred: "hsl(14, 92%, 95%)",
        lightred: "hsl(15, 100%, 70%)",
        paleblue: "hsl(226, 100%, 87%)",
        white: "hsl(0, 0%, 100%)",
        verypaleblue: "hsl(230, 100%, 99%)",
        lightgrayishblue1: "hsl(224, 65%, 95%)",
        lightgrayishblue2: "hsl(223, 50%, 87%)",
        grayishblue: "hsl(225, 20%, 60%)",
        darkdesaturatedblue: "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
