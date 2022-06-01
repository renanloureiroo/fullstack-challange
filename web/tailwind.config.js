const brand = {
  blue: "#1D9BF0",
  platinum: "#E7E9EA",
  silver: "#71767B",
  onix: "#333639",
  richBlack: "#15202B",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ...brand,
          background: brand.richBlack,
          text: brand.platinum,
        },
      },
    },
  },
  plugins: [],
};
