import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = UseAxiosSecure();
    const [filter, setFilter] = useState("all")
    

    const {data : users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data

        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })





    }
    return (
        <div>
            <div className="flex justify-evenly my-3">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total users {users.length}</h2>
            
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
         <th>Avatar</th>
         <th>Name</th>
         <th>Email</th>
         
        
        <th>User role</th>
        <th>User Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user =>   <tr key={user._id}>
          
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-full">
                    <img
                      src={user.avatar}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
              </div>
            </td>
            <td>
             {user.name}
            </td>
            <td>{user.email}</td>
            <th>
             {
                user.role === 'admin' ? 'Admin' :  <button

                onClick={() => handleMakeAdmin(user)}
  
                 className="btn btn-lg bg-orange-400">
                <FaUser></FaUser></button> 
             }
            </th>
            <th>
              <button

               className="btn btn-lg ">status</button>
            </th>
          </tr>

        )
      }
    
     
     
    </tbody>
  
    </table>
   </div>
        </div>
   
    );
};

export default AllUsers;