"use client";

import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FCA311", // Orange
    },
    secondary: {
      main: "#3471eb",
    },
    error: {
      main: "#FF0000", // Red
    },
    background: {
      default: "#FFFFFF", // White
      paper: "#E5E5E5", // Platinum
    },
    text: {
      primary: "#000000", // Black
      secondary: "#FCA311", // Orange
    },
  },
});

export default theme;