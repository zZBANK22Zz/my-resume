import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("tailwindcss-textshadow")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Built-in themes
    darkTheme: "dark", // Default dark mode theme
  },
} satisfies Config;
