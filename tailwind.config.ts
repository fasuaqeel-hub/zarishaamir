import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ink: "#050315",
      purple: "#4A3B8F",
      periwinkle: "#B7BBF1",
      lilac: "#CD9AF5",
      paper: "#F8F5F3",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Arial", "Helvetica", "sans-serif"],
        display: ["Segoe UI", "Arial", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.055em",
      },
      boxShadow: {
        button: "0 14px 30px rgba(74, 59, 143, 0.22)",
        card: "0 18px 55px rgba(74, 59, 143, 0.09)",
        lift: "0 22px 60px rgba(74, 59, 143, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
