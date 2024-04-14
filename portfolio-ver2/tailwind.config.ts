import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   powder: "#fffef8",
    //   eggshell: "#efecda",
    //   uranian: "#a2ceea",
    //   azul: "#1C6CAE",
    //   ucla: "#3179B5",
    //   txt_primary: "#1f2937",
    //   txt_second: "#6b7280",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        powder: "#fffef8",
        eggshell: "#efecda",
        uranian: "#a2ceea",
        azul: "#1C6CAE",
        ucla: "#3179B5",
        txt_primary: {
          "100": "#d2d4d7",
          "200": "#a5a9af",
          "300": "#797f87",
          "400": "#4c545f",
          500: "#1f2937",
          "600": "#19212c",
          "700": "#131921",
          "800": "#0c1016",
          "900": "#06080b",
        },
        txt_second: {
          "100": "#e1e3e6",
          "200": "#c4c7cc",
          "300": "#a6aab3",
          "400": "#898e99",
          "500": "#6b7280",
          "600": "#565b66",
          "700": "#40444d",
          "800": "#2b2e33",
          "900": "#15171a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
