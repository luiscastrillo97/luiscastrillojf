import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "clamp-h1": "clamp(2.5rem, 8vw, 4rem)",
      },
      textColor: {
        primary: "#0F1035",
        secondary: "#365486",
        tertiary: "#7FC7D9",
        quaternary: "#DCF2F1",
        "dark-primary": "#B4D4FF",
        "dark-secondary": "#EEF5FF",
        "dark-tertiaty": "#86B6F6",
        "dark-quaternary": "#176B87",
      },
      backgroundColor: {
        primary: "#DCF2F1",
        secondary: "#B4D4FF",
        tertiary: "#0F1035",
        "dark-primary": "#070F2B",
        "dark-secondary": "#1B1A55",
        "dark-tertiary": "#B4D4FF",
      },
      borderColor: {
        primary: "#0F1035",
        "dark-primary": "#B4D4FF",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
