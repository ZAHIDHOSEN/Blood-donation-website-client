import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const links = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/search'>Search</Link></li>
  <li><Link to='/dashboard/profile'>Dashboard</Link></li>
  <li><Link to='/blog'>Blog</Link></li>
  <li><Link to='/donationRequests'> Blood Donation Requests</Link></li>

  
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
         
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Blood</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
        
          </ul>
        </div>
        <div className="navbar-end">
          {

            
            
              user ? <>
             <div className="flex gap-5">
             <img className="h-12 w-12 border rounded-full" src={user?.photoURL} alt="" />
             <button onClick={logOut} className="btn btn-primary">LogOut</button>
             </div>
              </> : <>
              <Link to='/login'>Login</Link>
              </>
          
          }
        </div>
      </div>
    );
};

export default Navbar;