import { blue, green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[100],
        },
        secondary: {
            main: blue[100],
        }
    }
})