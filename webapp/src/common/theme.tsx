import { green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[200],
        },
        secondary: {
            main: grey[900],
        },
    }
})