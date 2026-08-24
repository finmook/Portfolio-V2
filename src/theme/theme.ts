import { createTheme } from "@mui/material/styles";

// Modern dark "tech portfolio" theme:
// deep near-black background, violet/cyan accent pair, soft glass surfaces.
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8b7bff", // violet
      light: "#b3a6ff",
      dark: "#6353e8",
      contrastText: "#0b0e14",
    },
    secondary: {
      main: "#30e0d1", // cyan
      light: "#6ff2e6",
      dark: "#1fb3a6",
      contrastText: "#0b0e14",
    },
    background: {
      default: "#0a0c14",
      paper: "#10131e",
    },
    text: {
      primary: "#eef0f7",
      secondary: "#9aa1b5",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
