import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";
import { grayTheme } from "./grayTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={grayTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
