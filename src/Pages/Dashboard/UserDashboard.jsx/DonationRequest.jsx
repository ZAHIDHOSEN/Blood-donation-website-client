import React, { useContext, useState } from 'react';

import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic';
import Swal from 'sweetalert2';


const DonationRequest = () => {
  const {user} = useContext(AuthContext)
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

    const {districts, upazila} = useLoaderData();
   

      const [selectDistrict, setSelectDistrict] = useState()
      const [filterDistrict, setFilterDistrict] = useState(districts)
      
      const [selectUpazila, setSelectUpazila] = useState();
      const [newUpazila, setNewUpazila] = useState(upazila);
     

      const { register, handleSubmit } = useForm()
      const onSubmit = async(data) => {
        console.log(data)

        const res = await axiosPublic.post('/requests',data)
        console.log(res.data)

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "create donation request",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/my-donation-requests')
      }
  

 
    
    return (
        <div> 
            <div>
                <h3 className="text-2xl font-bold text-center">Donation Request</h3>
            </div>

            <div>
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Requester Name</span>
                </label>
                <input type="text" {...register('requester-name')} value={user.displayName} placeholder="name" className="input input-bordered" disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Requester Email</span>
                </label>
                <input type="email"  {...register('requester-email')} value={user.email} placeholder="email" className="input input-bordered" disabled />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipent Name</span>
                </label>
                <input type='text'  {...register('recipentName')}  placeholder="recipent-name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <select  {...register('district')} className="select select-bordered w-full max-w-xs" value={selectDistrict} onChange={(e) => setSelectDistrict(e.target.value)}>
                 <option value="">District</option>
                 {filterDistrict.map((district) => (
                <option key={district._id} value={district.name}>
                 {district.name}
                </option>
                ))}
                  </select>
              
              </div>
               <div className="form-control">
               <label className="label">
               <span className="label-text">Upazila</span>
               </label>
                <select  {...register('upazila')} className="select select-bordered w-full max-w-xs" value={selectUpazila} onChange={(e) => setSelectUpazila(e.target.value)}>
               <option value="">upazila</option>
               {newUpazila.map((union) => (
                <option key={union._id} value={union.name}>
                {union.name}
              </option>
            ))}
          </select>
           
          </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Hospital  Name</span>
                </label>
                <input type="text"  {...register('hospitalName')} placeholder="Hospital name" className="input input-bordered" required />
              </div>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <input type="text" {...register('address')} placeholder="full address" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select {...register('group')} className="select select-bordered w-full max-w-xs">
             
                 <option value="">Blood Group</option>
                 <option value="A+">A+</option>
                 <option value="A-">A-</option>
                 <option value="B+">B+</option>
                 <option value="B-">B-</option>
                 <option value="AB+">AB+</option>
                 <option value="AB-">AB-</option>
                 <option value="O+">O+</option>
                 <option value="O-">O-</option>
            </select>
              </div>
              <div className='flex gap-5'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donation  Date</span>
                </label>
                <input type="date"  {...register('date')} placeholder="full address" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donation Time</span>
                </label>
                <input type="time"  {...register('time')} placeholder="donation time" className="input input-bordered" required />
              </div>
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Requester message</span>
                </label>
                <input type="text"  {...register('message')} placeholder="message" className="input input-bordered" required />
              </div>

             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Request</button>
              
              </div>
            </form>

     
            </div>
            
        </div>
    );
};

export default DonationRequest;