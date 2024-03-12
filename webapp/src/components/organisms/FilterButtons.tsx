import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';

export default function FilterButtons({ filters, handleFilter }: { filters: string[], handleFilter: (e: MouseEvent<HTMLElement>, newFilters: string[]) => void }) {
    return (
        <Container>
            <Stack sx={{ flexGrow: 1 }} margin="20px" alignItems="center">
                <ToggleButtonGroup value={filters} onChange={handleFilter}>
                    <ToggleButton value="ramen">ラーメン</ToggleButton>
                    <ToggleButton value="udon">うどん</ToggleButton>
                    <ToggleButton value="soba">そば</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Container>
    );
}