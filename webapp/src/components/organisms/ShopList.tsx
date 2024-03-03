import Stack from '@mui/material/Stack';
import Shop from '../molecules/Shop';

export default function ShopList() {
    return (
        <Stack spacing={2}>
            <Shop />
            <Shop />
            <Shop />
        </Stack>
    );
}