import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    layout: {
      contentWidth: 1236,
    },
    overrides: {
      MuiIconButton: {
        root: {
          borderRadius: "none",
        },
      },
      MuiAppBar: {
        colorDefault: {
          backgroundColor: "white",
        },
      },
    },
    palette: {
      primary: {
        main: "#fff",
        dark: "#040406ff",
        light: "#1f1f24",
        lighter: "#17171bff",
      },
      secondary: {
        main: "#1f66ffff",
        dark: "#5d0d1eff",
        light: "#ec7c93ff",
      },
      alternate: {
        main: "#cf372c",
        light: "#f7dddb",
        dark: "#485582",
      },
      grey: {
        dark: "#353535ff",
        main: "#898989ff",
        light: "#b4b4b4ff",
        bg: "#f5f5f5",
        white: "#fff",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
    },
    typography: {
      fontFamily: "Fira Sans Condensed",
      h1: {
        fontFamily: "BenchNine",
        fontSize: "5rem",
        letterSpacing: ".1rem",
      },
      h2: {
        fontFamily: "BenchNine",
        fontSize: "2.75rem",
        letterSpacing: ".1rem",
      },
      h3: {
        fontWeight: "normal",
        fontSize: "1.75rem",
      },
      h4: {
        fontWeight: "normal",
        fontSize: "1.5rem",
      },
      body1: {
        fontFamily: "Fira Sans Condensed",
        fontSize: "1rem",
      },
      button: {
        letterSpacing: ".1rem",
        fontSize: "1.2rem",
      },
      caption: {
        fontFamily: "Fira Sans Condensed",
        fontSize: "0.875rem",
      },
    },
  })
);

export default theme;
