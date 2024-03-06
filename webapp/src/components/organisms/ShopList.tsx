import { Shop } from '@/type';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShopCard from '../molecules/ShopCard';

export default function ShopList({ filters }: { filters: string[] }) {

    const shopList: Shop[] = [
        {
            name: "一蘭ラーメン川崎店",
            content: "美味しいラーメン屋さんです。",
            URL: "",
            type: [
                "ramen",
                "delicious"
            ]
        },
        {
            name: "kawara CAFE&DINING 川崎モアーズ店",
            content: "美味しいカフェ屋さんです。いつも空いているのでとてもおすすめです。",
            URL: "",
            type: [
                "cafe",
                "delicious"
            ]
        },
        {
            name: "千ちゃん",
            content: "美味しい韓国料理屋さんです。予約必須です。",
            URL: "",
            type: [
                "korean",
                "delicious"
            ]
        },
        {
            name: "山下本気うどん",
            content: "美味しいうどん屋さんです。24時間営業です。",
            URL: "",
            type: [
                "udon",
                "delicious"
            ]
        },
    ]

    return (
        <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
            <Grid container spacing={2}>
                {shopList.filter((shop) => shop.type.some(v => filters.includes(v))).map((shop) => (<Grid item xs={4} ><ShopCard name={shop.name} content={shop.content} URL={shop.URL} /></Grid>))}
            </Grid>
        </Box>
    );
}