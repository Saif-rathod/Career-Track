const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure all relevant file types are included
  ],
  darkMode: "class", // Enables dark mode via a class (e.g., 'dark')
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Function to flatten nested color objects
function flattenColors(colorsObj) {
  const result = {};
  for (const [key, value] of Object.entries(colorsObj)) {
    if (typeof value === "string") {
      result[key] = value;
    } else if (typeof value === "object") {
      for (const [shade, hex] of Object.entries(value)) {
        result[`${key}-${shade}`] = hex;
      }
    }
  }
  return result;
}

// Plugin to add Tailwind colors as global CSS variables
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColors(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
