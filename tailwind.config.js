// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ['"Playfair Display"', 'serif'], // Adds custom serif font
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: "#FDFCF9",
        "bg-elevated": "#FFFFFF",
        "bg-subtle": "#F3F2ED",

        // Text
        ink: "#0F0D09",
        "ink-secondary": "#5B584F",
        "ink-muted": "#7D7A71",
        placeholder: "#7D7A71",

        // Brand
        primary: {
          DEFAULT: "#6351CA",
          hover: "#4E3BAA",
          soft: "#EBE9FF",
        },
        accent: "#6351CA",

        // Borders
        line: {
          DEFAULT: "#E6E4DF",
          strong: "#D3D1CA",
        },

        // Status
        success: "#269E5F",
        error: "#E3645E",
        warning: "#E19B1B",
        danger: "#E3645E",
        star: "#E19B1B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        md2: "0.5rem",
        lg2: "0.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,13,9,0.04), 0 4px 12px rgba(15,13,9,0.06)",
        "card-hover": "0 4px 8px rgba(15,13,9,0.06), 0 12px 24px rgba(15,13,9,0.08)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #8A84E4 0%, #4E3BAA 100%)",
      },
    },
  },
  plugins: [],
};