import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/icons-material/SportsBarOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        のめるかも
                    </Typography>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                </Toolbar>
            </AppBar>
        </Box>
    );
}