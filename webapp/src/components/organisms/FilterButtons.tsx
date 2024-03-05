import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useState } from 'react';

export default function FilterButtons() {
    const [filters, setFilters] = useState<string[]>([]);
    const handleFilter = (e: MouseEvent<HTMLElement>, newFilters: string[]) => { setFilters(newFilters) }
    return (
        <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
            <ToggleButtonGroup value={filters} onChange={handleFilter}>
                <ToggleButton value="fileter1">Filter1</ToggleButton>
                <ToggleButton value="filter2">Filter2</ToggleButton>
                <ToggleButton value="filter3">Filter3</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}