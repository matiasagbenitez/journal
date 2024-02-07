import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const grayTheme = createTheme({
    palette: {
        primary: {
            main: "#455A64",
        },
        secondary: {
            main: "#546E7A",
        },
        error: {
            main: red.A400,
        },
    },
});