import { Outlet } from "react-router";
import Footer from "./Footer";
// import Header from "./Header";
import HeaderResponsive from "./HeaderResponsive";
import { Toaster } from "sonner";


const RouterLayout = () => {
    return (
        <>
        <HeaderResponsive></HeaderResponsive>
        <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet></Outlet>
        </div>
        <Footer />
        <Toaster richColors />
        </>
    )
}

export default RouterLayout;