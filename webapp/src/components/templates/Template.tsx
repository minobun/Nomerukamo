import { theme } from "@/common/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import FilterButtons from "../organisms/FilterButtons";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import ShopList from "../organisms/ShopList";

type TemplateProps = {
    children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <FilterButtons />
            {children}
            <ShopList />
            <Footer />
        </ThemeProvider>
    );
}