/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fatura: ["Fatura", "sans-serif"],
      },
      spacing: {
        "649px": "649.33px",
        "1144px": "1143.68px",
        "-115px": "-114.7px",
        "1260px": "1260.44px",
      },
      rotate: {
        "-28": "-28.89deg", // This can be customized further if needed.
      },
    },
  },
  plugins: [],
};
