import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import HideAppBar from "./HideAppBar/HideAppBar";

export default function Root() {
    return (
        <>
            <HideAppBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}