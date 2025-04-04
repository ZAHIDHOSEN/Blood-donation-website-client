import React from 'react';
import UseAxiosPublic from './../Hook/UseAxiosPublic';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const axiosPublic = UseAxiosPublic()


  const handleSubmit = async(e) =>{
    e.preventDefault()
    const email = e.target.email.value 
    const phone = e.target.phone.value 
    const message = e.target.message.value 
    const formData = {email,phone, message} 
    
    try{
     const data = await axiosPublic.post('/contact',formData)
     console.log(data.data);
       Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Thanks for contact us",
                  showConfirmButton: false,
                  timer: 1500
                });
                e.target.reset()

    }
    catch(error){
      console.log('didnot post',error);
    }
   

    
  }
    return (
        <div className="card bg-gray-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3  shrink-0 shadow-2xl my-5">
         
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" required />
          
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input type="text" name='message' placeholder="Send a message" className="input input-bordered h-16" required />
          
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default ContactForm;