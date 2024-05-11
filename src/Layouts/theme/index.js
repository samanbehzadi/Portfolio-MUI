import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    direction: 'rtl',
    palette: { mode: 'dark', primary: { main: '#8fe9fd' }, secondary: {main: '#bd93f9'} },
    typography: {button: { fontWeight: 'bold', fontSize: '0.8rem'}, p: {color: 'aqua'}}
})