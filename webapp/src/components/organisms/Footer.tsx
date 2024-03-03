import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant='body2'>
                &copy; {date} Nomerukamo
            </Typography>
        </Box>
    );
}