import { CgProfile } from "react-icons/cg";
import { FaCalendar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" menu p-4">
                    <li>
                   
                        <NavLink to="/dashboard/profile"> <CgProfile />My profile</NavLink>
                    </li>
                    <li>
                   
                        <NavLink to="/dashboard/home"> <IoMdHome />My Home</NavLink>
                    </li>
                    <li>
                   
                        <NavLink to="/dashboard/management"><FaCalendar />Management</NavLink>
                    </li>

                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;