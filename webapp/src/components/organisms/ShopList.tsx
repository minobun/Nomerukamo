import { Shop } from '@/type';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShopCard from '../molecules/ShopCard';

export default function ShopList({ filters, shopList }: { filters: string[], shopList: Shop[] }) {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
            <Grid container spacing={2}>
                {shopList
                    .filter((shop) => shop.type.some(v => filters.includes(v)))
                    .map((shop, index) =>
                        (<Grid item xs={4} key={index}><ShopCard name={shop.name} content={shop.content} URL={shop.URL} /></Grid>)
                    )}
            </Grid>
        </Box>
    );
}