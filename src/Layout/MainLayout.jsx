import { Outlet } from "react-router-dom";
import Navbar from "../Shaed/Navbar";
import Footer from "../Shaed/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default MainLayout;