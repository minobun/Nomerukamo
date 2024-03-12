import { Link, MenuItem, MenuList, Typography } from "@mui/material";

export default function SideMenu() {
    return (
        <MenuList>
            <Typography variant="body2">
                メニュー
            </Typography>
            <Link href="/">
                <MenuItem>ホーム</MenuItem>
            </Link>
            <Link href="/shop/new">
                <MenuItem>投稿</MenuItem>
            </Link>
        </MenuList>
    )
}