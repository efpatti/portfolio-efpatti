// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
 content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    inter: ["var(--font-inter)", "sans-serif"],
    sora: ["var(--font-sora)", "sans-serif"],
   },
   animation: {
    "gradient-x": "gradient-x 5s linear infinite",
   },
   keyframes: {
    "gradient-x": {
     "0%, 100%": {
      backgroundPosition: "0% 50%",
     },
     "50%": {
      backgroundPosition: "100% 50%",
     },
    },
   },
  },
 },
 plugins: [],
};

export default config;
