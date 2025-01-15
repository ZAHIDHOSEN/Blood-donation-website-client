import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    // console.log(user.email)
    const [profileData, setProfileData] = useState([])



    useEffect(() =>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setProfileData(data)
        })
    },[user])
    return (
        <div>
            <h2 className="text-4xl">My Profile</h2>
            <p>{profileData.name}</p>


            
        </div>
    );
};

export default Profile;


    // axiosPublic.get(`/users?email=${user?.email}`)
    // .then(res =>{
    //     console.log(res.data)
    // })