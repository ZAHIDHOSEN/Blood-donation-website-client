import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllBloodDonationRequest = () => {
    const axiosSecure = UseAxiosSecure();
    const {user,loading} = useContext(AuthContext)
    const [allDonationRequest, setAllDonationRequest] = useState([])
    const [filterRequest, setFilterRequest] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(() =>{
        axiosSecure.get('/requests/admin')
        .then(res =>{
            console.log(res.data);
            setAllDonationRequest(res.data)
            setFilterRequest(res.data)
        })
    },[axiosSecure])


    const handleChange = (status) =>{
        setFilter(status);
        if(status === "all"){
            setFilterRequest(allDonationRequest);

        }
        else{
            const filtered = allDonationRequest.filter(request => request.donationStatus === status);
            setFilterRequest(filtered)
        }
    }


    if (loading) return <span className="loading loading-bars loading-lg"></span>;


    return (
        <div>
        <h2 className="text-5xl text-center font-bold my-5">All Blood DOnation Request</h2>


       <div className="flex justify-center my-4">
    <button
      className={`btn  ${filter === "all" ? "btn-primary" : "btn-outline"}`}
      onClick={() => handleChange("all")}
    >
      All
    </button>
    <button
      className={`btn mx-2 ${
        filter === "pending" ? "btn-primary" : "btn-outline"
      }`}
      onClick={() => handleChange("pending")}
    >
      Pending
    </button>
    <button
      className={`btn  ${
        filter === "inprogress" ? "btn-primary" : "btn-outline"
      }`}
      onClick={() => handleChange("inprogress")}
    >
      In Progress
    </button>
    <button
      className={`btn mx-2 ${filter === "done" ? "btn-primary" : "btn-outline"}`}
      onClick={() => handleChange("done")}
    >
      Done
    </button>
    <button
      className={`btn mx-2 ${
        filter === "canceled" ? "btn-primary" : "btn-outline"
      }`}
      onClick={() => handleChange("canceled")}
    >
      Canceled
    </button>
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

  {filterRequest.map((request,index)=>(
 <tr key={request._id}>
 <th>{index + 1}</th>
 <td>{request.recipentName}</td>
 <td>{`${request.district}, ${request.upazila}`}</td>
 <td>{request.date}</td>
 <td>{request.time}</td>
 <td>{request.group}</td>

 <td>
              {request.donationStatus === "inprogress" ? (
                <div>
                  <button
                    className="btn btn-success mx-1"
                    onClick={() => handleChange(request._id, "done")}
                  >
                    Done
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleChange(request._id, "canceled")}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <span>{request.donationStatus}</span>
              )}
              <div className="mt-2">
              <td>
               
               <Link to={`/dashboard/edit/${request._id}`}><button className="btn btn-warning mr-2">Edit</button></Link>
            
             </td>
              </div>
            </td>
        
           
        </tr>
  ))}
  {/* row 2 */}

</tbody>
</table>
</div>


      
        
    </div>
    );
};

export default AllBloodDonationRequest;