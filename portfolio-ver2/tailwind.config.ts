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
        txt_primary: "#1f2937",
        txt_second: "#6b7280",
      },
    },
  },
  plugins: [],
};
export default config;
