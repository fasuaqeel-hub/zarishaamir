import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ink: "#111111",
      muted: "#5E5E5E",
      accent: "#326371",
      mint: "#DAEEE3",
      pink: "#E971C8",
      cream: "#F1F2EF",
      border: "#E2E2DD",
      paper: "#F8F8F6",
      white: "#FFFFFF",
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
        button: "0 12px 24px rgba(17, 17, 17, 0.10)",
        card: "0 18px 55px rgba(17, 17, 17, 0.07)",
        lift: "0 24px 70px rgba(17, 17, 17, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
