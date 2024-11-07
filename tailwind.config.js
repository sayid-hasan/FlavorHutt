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
        parallax: 'url("https://i.imgur.com/SmTEnXi.jpg")',
      },
    },
    fontFamily: {
      firaSans: `"Fira Sans", sans-serif`,
      frescha: ` "Fresca", sans-serif;`,
      Courgette: ` ""Courgette", cursive`,
    },
  },
  plugins: [require("daisyui")],
});
