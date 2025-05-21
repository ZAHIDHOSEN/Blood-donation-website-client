import { Outlet } from "react-router-dom";
import Navbar from "../Shaed/Navbar";
import Footer from "../Shaed/Footer";


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className="flex-grow">
            <Outlet></Outlet>

            </main>
          
            <Footer></Footer>

            
        </div>
    );
};

export default MainLayout;