import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#2196f3",
      dark: "#424242",
    },
    secondary: {
      main: "#9155fd", //for buttons
      dark: "#9257fd", //for hover buttons
      light: "#c4a4fe", //for hover buttons  and text background
      hover: "#ede7f6", //for text
      bg: "#f4f5fa", //for background
    },
    text: {
      primary: "#544f5a", //for header and text
      secondary: "#b4b2b7", //for border text or helper text
      disabled: "#79767e",
      other: "#544f5a",
    },
    background: {
      default: "#fff", //for card background
      home: "#fafafa", //for background
      paper: "#f4f5fa",
      disabled: "#ebebeb",
      border: "#e7e7e8",
    },
    error: {
      main: "#ff4c51", //for text and buttons
      bg: "#ffa5a8", //for background and outline
    },
    warning: {
      main: "#e5a200", //for warning text
      bg: "#fdede1", //for warning background
    },
    cancel: {
      main: "#8a8d93",
      dark: "#e03546",
      bg: "#fff",
    },
    login: {
      main: "#1554f6",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightBolder: 800,
    fontWeightBoldest: 900,
    h1: {
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "32px",
      margin: "0 0 0.5rem 0",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 300,
      lineHeight: "28px",
      margin: "0 0 0.5rem 0",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "26px",
      margin: "0 0 0.5rem 0",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
      margin: "0 0 0.5rem 0",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "20px",
      margin: "0 0 0.5rem 0",
    },
    h6: {
        fontSize: "12px",
        fontWeight: 300,
        lineHeight: "18px",
        margin: "0 0 0.5rem 0",
    },
    h7: {
        fontSize: "10px",
        fontWeight: 300,
        lineHeight: "16px",
        margin: "0 0 0.5rem 0",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "0px",
          marginRight: "5px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#544f5a",
          fontSize: "16px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#544f5a",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 867,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
