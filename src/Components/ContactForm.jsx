import React from 'react';

const ContactForm = () => {
    return (
        <div className="card bg-gray-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto shrink-0 shadow-2xl my-5">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="number" placeholder="Phone Number" className="input input-bordered" required />
          
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input type="text" placeholder="Send a message" className="input input-bordered h-16" required />
          
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default ContactForm;