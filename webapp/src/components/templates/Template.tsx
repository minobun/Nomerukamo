import FilterButtons from "../organisms/FilterButtons";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import ShopList from "../organisms/ShopList";

export default function Template() {
    return (
        <>
            <Header />
            <FilterButtons />
            <ShopList />
            <Footer />
        </>
    );
}