import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()


    const {districts, upazila} = useLoaderData()
    // console.log(districts, upazila)
    const [selectDistrict, setSelectDistrict] = useState()
      const [filterDistrict, setFilterDistrict] = useState(districts)

        // const [newUpazila, setNewUpazila] = useState();
        // const [selectUpazila, setSelectUpazila] = useState(upazila);

         const [newUpazila, setNewUpazila] = useState(upazila);
          const [selectUpazila, setSelectUpazila] = useState();
          const [errorMessage, setErrorMessage] = useState('')

          const handleRegister = e =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const name = form.name.value;
            const avatar = form.avatar.value;
            const group = form.group.value;
            const district = form.district.value;
            const upazila = form.upazila.value;
            const password = form.textPass.value;
            const ConfirmPassword = form.password.value;

            const formData = {email, name, avatar, group, district, upazila, password, ConfirmPassword}
            console.log(formData);

                 // password validation
                  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
                   if(!passwordPattern.test(ConfirmPassword)){
                   setErrorMessage('At least one uppercase, one lower case and not less than six digit')
                    return;
            
                   }

            createUser(email, ConfirmPassword)
            .then(result =>{
                const user = result.user;
                console.log(user);

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "registration completed successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            })


          }

        //   useEffect(()=>{
        //     loadCaptchaEnginge(6); 

        //   },[])




    return (

          <div className="card bg-base-100 w-1/2 mx-auto shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Register</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <input type='URL' name='avatar' placeholder="Avatar" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select name='group' className="select select-bordered w-full max-w-xs">
             
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
                  <span className="label-text">District</span>
                </label>
                <select name='district' className="select select-bordered w-full max-w-xs" value={selectDistrict} onChange={(e) => setSelectDistrict(e.target.value)}>
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
                <select name='upazila' className="select select-bordered w-full max-w-xs" value={selectUpazila} onChange={(e) => setSelectUpazila(e.target.value)}>
               <option value="">upazila</option>
               {newUpazila.map((union) => (
                <option key={union._id} value={union.name}>
                {union.name}
              </option>
            ))}
          </select>
           
          </div>

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='textPass' placeholder="password" className="input input-bordered" required />
              
              </div>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder=" confirm password" className="input input-bordered" required />
                {
                  errorMessage && <p className='text-red-500'>{errorMessage}</p>
                }
              
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p>older user here <Link to='/login'>Login</Link></p>
              </div>
            </form>
          </div>
     
    );
};

export default Register;