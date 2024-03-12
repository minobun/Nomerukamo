import FilterButtons from "@/components/organisms/FilterButtons";
import ShopList from "@/components/organisms/ShopList";
import Template from "@/components/templates/Template";
import Typography from '@mui/material/Typography';
import { Shop } from "@prisma/client";
import { MouseEvent, useEffect, useState } from "react";

export default function Home() {
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
        <Template>
            <Typography alignItems="center" alignContent="center" textAlign="center">川崎にある美味しいお店を紹介します。</Typography>
            <FilterButtons filters={filters} handleFilter={handleFilter} />
            <ShopList filters={filters} shopList={shopList} />
        </Template>
    )
}