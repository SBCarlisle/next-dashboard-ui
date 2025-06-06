import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlue: "#1E40AF", // Blue
        primaryBlueLight: "#3B82F6", // Light Blue
        primaryBlueDark: "#1E3A8A", // Dark Blue
        secondaryYellow: "#FBBF24", // Yellow
        secondaryYellowLight: "#FDE047", // Light Yellow
        secondaryYellowDark: "#D97706", // Dark Yellow
        accentGreen: "#10B981", // Green
        accentGreenLight: "#34D399", // Light Green
        accentGreenDark: "#065F46", // Dark Green
        accent: "#EF4444", // Red
        background: "#F3F4F6", // Gray
        textPrimary: "#111827", // Dark Gray
        textSecondary: "#6B7280", // Light Gray
      },
    },
  },
  plugins: [],
};
export default config;
