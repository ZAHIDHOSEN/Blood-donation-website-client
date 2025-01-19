import { CgProfile } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaUser } from "react-icons/fa";
import { Fa3, FaReact } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin";


const Dashboard = () => {

    // todo : get admin value from database

    const [isAdmin] = UseAdmin();
    
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" menu p-4">

                    {
                        isAdmin ? <>


                   
                      <li> <NavLink to="/dashboard/profile"> <CgProfile />My profile</NavLink> </li>
                      <li> <NavLink to="/dashboard/adminHome"> <FaHome />My Home</NavLink> </li>
                      <li> <NavLink to="/dashboard/all users"> <FaUser/>All users</NavLink> </li>
                      <li> <NavLink to="/dashboard/allDonationRequest"> <FaCalendar />All Blood Donation Request</NavLink> </li>
                      <li> <NavLink to="/dashboard/content-management"> <FaList/>Content Management</NavLink> </li>
                   

                        </>
                        : <>
                                 <li> <NavLink to="/dashboard/profile"> <CgProfile />My profile</NavLink> </li>
                                 <li> <NavLink to="/dashboard/userHome"> <CgProfile />My Home</NavLink> </li>
                                 <li> <NavLink to="/dashboard/donationRequest"> <CgProfile />Donation Request page</NavLink> </li>
                                 <li> <NavLink to="/dashboard/my-donation-requests"> <CgProfile />My Donation Request</NavLink> </li>
                                
                   
                    
                        </>
                    }
           


                    <div className="divider"></div>
                    {/* shared nav links */}

                    <li>
                   
                   <NavLink to="/"> <CgProfile />Home</NavLink>
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


// <div className="divider"></div>