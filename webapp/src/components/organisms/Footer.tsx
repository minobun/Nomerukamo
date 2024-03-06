import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} margin="50px" textAlign="center">
            <Typography variant='overline'>
                &copy; {new Date().getFullYear()} Nomerukamo
            </Typography>
        </Box>
    );
}