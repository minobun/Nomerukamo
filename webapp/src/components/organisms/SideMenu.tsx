import { Link, MenuItem, MenuList } from "@mui/material";

export default function SideMenu() {
    return (
        <MenuList>
            <Link href="/" >
                <MenuItem>Home</MenuItem>
            </Link>
            <Link href="/shop/new">
                <MenuItem>About</MenuItem>
            </Link>
            <MenuList>
                <Link href="/shop/new" color="secondary">
                    <MenuItem>お店一覧</MenuItem>
                </Link>
            </MenuList>
        </MenuList>
    )
}