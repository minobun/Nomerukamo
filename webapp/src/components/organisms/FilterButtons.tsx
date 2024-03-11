import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Shop } from '@prisma/client';
import { MouseEvent, useEffect, useState } from 'react';
import ShopList from './ShopList';

export default function FilterButtons() {
    const [filters, setFilters] = useState<string[]>(['ramen']);
    const [shopList, setShopList] = useState<Shop[]>([]);
    const handleFilter = (e: MouseEvent<HTMLElement>, newFilters: string[]) => { setFilters(newFilters) }

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await fetch('/api/shop', {
                    method: 'GET'
                })
                const data = await res.json()
                if (res.ok) {
                    setShopList(data);
                    console.log('データ取得成功')
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchShop();
    }, [])

    return (
        <Container>
            <Stack sx={{ flexGrow: 1 }} margin="20px" alignItems="center">
                <ToggleButtonGroup value={filters} onChange={handleFilter}>
                    <ToggleButton value="ramen">"ラーメン"のお店</ToggleButton>
                    <ToggleButton value="udon">"うどん"のお店</ToggleButton>
                    <ToggleButton value="umai">"美味しい！"お店</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <ShopList filters={filters} shopList={shopList}></ShopList>
        </Container>
    );
}