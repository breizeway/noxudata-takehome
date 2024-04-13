import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warning: "rgb(240, 103, 26)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".width-max-content": {
          width: "100%",
          maxWidth: "var(--width-max-content)",
          marginRight: "auto",
          marginLeft: "auto",
        },
      });
    }),
  ],
};
export default config;
