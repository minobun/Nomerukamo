import { SportsBarTwoTone } from '@mui/icons-material';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';



export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <SportsBarTwoTone />
                    <SportsBarTwoTone />
                    <Button href="/" variant='text' color='secondary'>
                        のめるかも
                    </Button>
                    <SportsBarTwoTone />
                    <SportsBarTwoTone />
                </Toolbar>
            </AppBar>
        </Box>
    );
}