/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern:
        /^(hover:)?(text|bg|border)-(blue|red|yellow|green|purple|orange)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
        audiowide: ["'Audiowide'", "cursive"],
      },
    },
  },
  plugins: [],
};
