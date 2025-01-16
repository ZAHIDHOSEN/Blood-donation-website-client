import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Profile = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    // console.log(user.email)
    const [profileData, setProfileData] = useState({})
    const [isEditable, setIsEditable] = useState(false);



    useEffect(() =>{
        
       if(user?.email){
        axiosPublic.get(`/users?email=${user?.email}`)
        .then(res =>{
            console.log(res.data)
            setProfileData(res.data)
        })
       }
    
        },[user, axiosPublic])


    const handleUpdate = e =>{
        e.preventDefault();

        const updatedData = {
            name: profileData.name, 
            // email: profileData.email,

            avatar: profileData.avatar,
            district: profileData.district,
            upazila: profileData.upazila,
            group: profileData.group,
        };

        axiosPublic.patch(`/users/${profileData._id}`, updatedData)
        .then((res) => {
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "updated data successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setIsEditable(false);
            }
        })
    }

    if(loading) return <span className="loading loading-bars loading-lg"></span> 



  
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">My Profile</h2>
            <div className="card bg-base-100 w-1/2 mx-auto shrink-0 shadow-2xl my-10">
          <form onSubmit={handleUpdate} className="card-body">
           <div className="form-control">
           <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" 
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            disabled={!isEditable}
            className={`input input-bordered ${!isEditable ? "bg-gray-200" : "bg-white"}`}
           value={profileData.name}  required />
          </div>
           <div className="form-control">
           <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
            
              value={profileData.email || ""}
              disabled
             
           className="input input-bordered" required />
          </div>
           <div className="form-control">
           <label className="label">
            <span className="label-text">Avatar</span>
          </label>
          <input type="URL"  
             value={profileData.avatar || ""}
             onChange={(e) => setProfileData({ ...profileData, avatar: e.target.value })}
             disabled={!isEditable}
             className={`input input-bordered ${!isEditable ? "bg-gray-200" : "bg-white"}`}
           required />
          </div>
          <div className="flex ">
          <div className="form-control">
           <label className="label">
            <span className="label-text">District</span>
          </label>
          <input type="text"
               value={profileData.district || ""}
               onChange={(e) => setProfileData({ ...profileData, district: e.target.value })}
               disabled={!isEditable}
               className={`input input-bordered w-1/2  ${!isEditable ? "bg-gray-200" : "bg-white"}`}
           />
          </div>
          <div className="form-control">
           <label className="label">
            <span className="label-text">upazila</span>
          </label>
          <input type="text" 
             value={profileData.upazila || ""}
             onChange={(e) => setProfileData({ ...profileData, upazila: e.target.value })}
             disabled={!isEditable}
             className={`input input-bordered w-1/2 ${!isEditable ? "bg-gray-200" : "bg-white"}`}
            />
          </div>

          </div>

          <div className="form-control">
           <label className="label">
            <span className="label-text">Blood group</span>
          </label>
          <input type="URL"
              value={profileData.group || ""}
              onChange={(e) => setProfileData({ ...profileData, group: e.target.value })}
              disabled={!isEditable}
              className={`input input-bordered${!isEditable ? "bg-gray-200" : "bg-white"}`}  required />
          </div>
    
        <div className="form-control mt-6">
        {!isEditable ? (
                        <button
                            type="button"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setIsEditable(true)}
                        >
                            Edit
                        </button>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-500 text-white rounded mb-2"
                                onClick={() => setIsEditable(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                onClick={handleUpdate}
                            >
                                update
                            </button>
                        </>
                    )}
        </div>
      </form>
    </div>


            
        </div>
    );
};

export default Profile;

