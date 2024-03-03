import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function FilterButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Filter1</Button>
            <Button variant="contained">Filter2</Button>
            <Button variant="outlined">Filter3</Button>
        </Stack>
    );
}