module.exports = {
  content: [
    // add this lines
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansMedium: "sansMedium",
        sansBlack: "sansBlack",
        sansLight: "sansLight",
        sansUltraLight: "sansUltraLight",
        sans:"sans",
        yekan:"yekan",
      },
      colors: {
        silver: "#ff5e57",
        imperialPrimer:"#2f3542",
        black: "#1A365D",
      },
      backgroundColor: {
        silver: "#ff5e57",
        fuelTown:"#576574"
      },
    },
  },
  plugins: [],
};
