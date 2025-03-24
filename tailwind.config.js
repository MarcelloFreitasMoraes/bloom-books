import { createThemes } from 'tw-animate-css';

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        black: "var(--black)",
        backgroundSecundary: "var(--background-secundary)",
      },
    },
  },
  plugins: [createThemes()],
};
