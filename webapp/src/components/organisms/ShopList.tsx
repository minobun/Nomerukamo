import { ShopProps } from '@/type';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Shop from '../molecules/Shop';

export default function ShopList() {

    const shopList: ShopProps[] = [
        {
            name: "一蘭ラーメン川崎店",
            content: "美味しいラーメン屋さんです。",
            URL: ""
        },
        {
            name: "kawara CAFE&DINING 川崎モアーズ店",
            content: "美味しいカフェ屋さんです。いつも空いているのでとてもおすすめです。",
            URL: ""
        },
        {
            name: "千ちゃん",
            content: "美味しい韓国料理屋さんです。予約必須です。",
            URL: ""
        },
    ]

    return (
        <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
            <Grid container spacing={2}>
                {shopList.map((shop) => (<Grid item xs={4} ><Shop name={shop.name} content={shop.content} URL={shop.URL} /></Grid>))}
            </Grid>
        </Box>
    );
}