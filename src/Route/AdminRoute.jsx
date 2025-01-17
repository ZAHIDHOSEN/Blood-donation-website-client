import { useContext } from "react";
import UseAdmin from "../Hook/UseAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

  
    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-lg"></span>

    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default AdminRoute;