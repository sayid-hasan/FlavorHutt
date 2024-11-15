/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax1: 'url("https://i.imgur.com/SmTEnXi.jpg")',
        parallax2: 'url("https://i.imgur.com/jcnjlrB.jpg")',
      },
    },
    fontFamily: {
      firaSans: `"Fira Sans", sans-serif`,
      frescha: ` "Fresca", sans-serif;`,
      Courgette: ` "Courgette", cursive`,
    },
  },
  plugins: [require("daisyui")],
});
