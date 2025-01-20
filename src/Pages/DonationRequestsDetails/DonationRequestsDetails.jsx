import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import Swal from "sweetalert2";


const DonationRequestDetails = () => {
  const { id } = useParams(); 
  const axiosPublic = UseAxiosPublic();

  const [request, setRequest] = useState([]);


  useEffect(() => {


    axiosPublic.get(`/requests/public/${id}`)
      .then((res) => setRequest(res.data))
      
  }, [id, axiosPublic]);



  if (!request) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Donation Request Details</h2>
      <div className="card bg-base-100 shadow-xl p-4">
        <h3 className="text-xl font-bold">Recipient Name: {request.recipientName}</h3>
        <p>Location: {request.location}</p>
        <p>Blood Group: {request.bloodGroup}</p>
        <p>Date: {request.date}</p>
        <p>Time: {request.time}</p>
        <button  className="btn btn-primary mt-4">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationRequestDetails;
