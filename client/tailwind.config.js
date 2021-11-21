module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cherrySwash: ["Cherry Swash", "cursive"],
      cookie: ["Cookie", "cursive"],
      oleo: ["Oleo Script Swash Caps", "cursive"],
    },
    colors: {
      purpleish: {
        50: "#734882",
      },
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
