import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useState } from 'react';
import ShopList from './ShopList';

export default function FilterButtons() {
    const [filters, setFilters] = useState<string[]>(['ramen']);
    const handleFilter = (e: MouseEvent<HTMLElement>, newFilters: string[]) => { setFilters(newFilters) }
    return (
        <Container>
            <Stack sx={{ flexGrow: 1 }} margin="20px" alignItems="center">
                <ToggleButtonGroup value={filters} onChange={handleFilter}>
                    <ToggleButton value="ramen">"ラーメン"のお店</ToggleButton>
                    <ToggleButton value="udon">"うどん"のお店</ToggleButton>
                    <ToggleButton value="delicious">"美味しい！"お店</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <ShopList filters={filters}></ShopList>
        </Container>
    );
}