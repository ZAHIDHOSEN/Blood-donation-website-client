import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UseAxiosPublic from "../../../Hook/UseAxiosPublic";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Link, Links } from "react-router-dom";



const UserHome = () => {
    const {user,loading} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const [donationRequests, setDonationRequests] = useState([])
    const [resentRequest, setRecentRequest] = useState([])
   

    useEffect(()=>{
        axiosPublic.get(`/requests?email=${user?.email}`)
        .then(res =>{
            console.log(res.data)
            setDonationRequests(res.data)
            setRecentRequest(res.data.slice(0,3))

        })
        
    },[axiosPublic,user])
    const handleDelete = (item)=>{


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/requests/${item._id}`)
          if(res.data.deletedCount > 0 ){
    
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name}Deleted successfully`,
              showConfirmButton: false,
              timer: 1500
            });

          }
      
        }
      });

    }
    if (loading) return <span className="loading loading-bars loading-lg"></span>;

    return (
        <div>
            <div>
                <h3 className="text-4xl font-bold text-center text-red-500">Welcome {user.displayName}</h3>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Recipient Name</th>
        <th>Recipient location</th>
        <th>Donation Date</th>
        <th>Donation Time</th>
        <th>Blood Group</th>
      </tr>
    </thead>
    <tbody>
    
      {resentRequest.map((request,index)=>(
              <tr key={request._id}>
              <th>{index + 1}</th>
              <td>{request['recipent-name']}</td>
              <td>{`${request.district}, ${request.upazila}`}</td>
              <td>{request.date}</td>
              <td>{request.time}</td>
              <td>{request.group}</td>
            
                  <td>
                   
                    <Link to={`/dashboard/edit/${request._id}`}><button className="btn btn-warning mr-2">Edit</button></Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(request)}>Delete</button>
                  </td>
            </tr>
      ))}

    </tbody>
  </table>
</div>
<div className="flex justify-center my-4">
    <Link to={`/dashboard/my-donation-requests`}><button className="btn bg-red-500 ">View All</button></Link>
    </div>
            
        </div>
    );
};

export default UserHome;