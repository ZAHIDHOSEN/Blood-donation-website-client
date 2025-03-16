import { CgProfile } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaUser, FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import UseAdmin from "../Hook/UseAdmin";

const Dashboard = () => {
    const [isAdmin] = UseAdmin();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            
            {/* Toggle Button for Mobile */}
            <button 
                className="md:hidden bg-orange-500 p-3 text-white fixed top-4 left-4 rounded-full z-50"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <FaBars size={24} />
            </button>

            {/* Sidebar */}
            <div 
                className={`w-64 min-h-screen bg-orange-400 fixed md:static z-40 transition-all duration-300 
                ${isSidebarOpen ? "left-0" : "-left-64"} md:left-0`}
            >
                <ul className="menu p-4">
                    {isAdmin ? 
                        <>
                            <li><NavLink to="/dashboard/profile"><CgProfile /> My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/adminHome"><FaHome /> My Home</NavLink></li>
                            <li><NavLink to="/dashboard/all users"><FaUser /> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/allDonationRequest"><FaCalendar /> All Blood Donation Requests</NavLink></li>
                            <li><NavLink to="/dashboard/content-management"><FaList /> Content Management</NavLink></li>
                        </>
                     : 
                        <>
                            <li><NavLink to="/dashboard/profile"><CgProfile /> My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/userHome"><FaHome /> My Home</NavLink></li>
                            <li><NavLink to="/dashboard/donationRequest"><FaCalendar /> Donation Request</NavLink></li>
                            <li><NavLink to="/dashboard/my-donation-requests"><CgProfile /> My Donation Requests</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    {/* Shared Nav Links */}
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                </ul>
            </div>

            {/* Main Dashboard Content */}
            <div className="flex-1 p-4 ">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;









