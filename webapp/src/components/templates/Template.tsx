import Grid from '@mui/material/Grid';
import { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SideMenu from "../organisms/SideMenu";

type TemplateProps = {
    children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
    return (
        <>
            <Header />
            <Grid container spacing={2} padding="20px">
                <Grid item xs={2}>
                    <SideMenu />
                </Grid>
                <Grid item xs={8}>
                    {children}
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}