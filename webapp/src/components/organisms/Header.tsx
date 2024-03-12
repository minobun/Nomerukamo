import { dotGothicTheme } from '@/common/theme';
import { Grid, ThemeProvider, Typography } from '@mui/material';

const height = 120

export default function Header() {
    return (
        <ThemeProvider theme={dotGothicTheme}>
            <Grid container alignItems="center" justifyContent="center" textAlign='center'>
                <Grid item sx={{
                    backgroundImage: "url('/img/noren4_green.png')",
                    backgroundRepeat: "no-repeat",
                }} width={`300px`} height={`${height}px`}>
                    <Typography variant='h5' color="white" lineHeight={`${height}px`} component='h1' letterSpacing='19px' >
                        のめるか
                        <Typography variant='h5' component='span' letterSpacing='0px'>
                            も
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}