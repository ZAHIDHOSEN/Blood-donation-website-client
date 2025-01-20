import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";

const DonationRequests = () => {
  const axiosPublic = UseAxiosPublic();
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() =>{
    axiosPublic.get("/requests/public")
    .then(res =>{
        console.log(res.data)
        setRequests(res.data)
    })
  },[axiosPublic])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-center font-bold mb-4">Pending Blood Donation Requests</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {requests.map((request) => (
          <div key={request._id} className="card bg-base-100 shadow-xl p-4">
            <h3 className="text-xl font-bold">{request.recipentName}</h3>
            <p>Location:{`${request.district}, ${request.upazila}`}</p>
            <p>Blood Group: {request.group}</p>
            <p>Date: {request.date}</p>
            <p>Time: {request.time}</p>
            <Link to={`/donationRequestsDetails/${request._id}`}><button className="btn btn-primary mt-2">View Details</button></Link>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequests;
