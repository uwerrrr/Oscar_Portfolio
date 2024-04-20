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
        powder: {
          100: "#fffffe",
          200: "#fffffc",
          300: "#fffefb",
          400: "#fffef9",
          500: "#fffef8",
          600: "#cccbc6",
          700: "#999895",
          800: "#666663",
          900: "#333332",
        },
        eggshell: "#efecda",
        uranian: "#a2ceea",
        azul: "#1C6CAE",
        ucla: {
          100: "#d6e4f0",
          200: "#adc9e1",
          300: "#83afd3",
          400: "#5a94c4",
          500: "#3179b5",
          600: "#276191",
          700: "#1d496d",
          800: "#143048",
          900: "#0a1824",
        },
        coral: {
          100: "#ffe8e6",
          200: "#ffd1cd",
          300: "#ffbbb5",
          400: "#ffa49c",
          500: "#ff8d83",
          600: "#cc7169",
          700: "#99554f",
          800: "#663834",
          900: "#331c1a",
        },
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
        iron: {
          100: "#f5f7f9",
          200: "#ebf0f2",
          300: "#e2e8ec",
          400: "#d8e1e5",
          500: "#ced9df",
          600: "#a5aeb2",
          700: "#7c8286",
          800: "#525759",
          900: "#292b2d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
