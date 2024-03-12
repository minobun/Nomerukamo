import { blue, green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[900],
        },
        secondary: {
            main: blue[900],
        },
    },
})

export const dotGothicTheme = createTheme({
    typography: {
        fontFamily: [
            'DotGothic16',
        ].join(','),
    },
})