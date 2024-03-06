import { theme } from "@/common/theme";
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import FilterButtons from "../organisms/FilterButtons";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

type TemplateProps = {
    children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container maxWidth='lg'>
                {children}
                <FilterButtons />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}