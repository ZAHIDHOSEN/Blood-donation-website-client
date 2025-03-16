import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {user,login,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log('login successfully', user)

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "login in completed successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from, {replace: true});

        })

      




    }
    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result =>{
        const user = result.user
        console.log(user);
        navigate(from,{replace: true})
      })
      .catch(error =>{
        console.log(error.message);
      })
    }

    const handleAdmin = (e) =>{
      e.preventDefault()
      
      const email = 'raju@gmail.com'
      const password = 'Raju123';

      login(email,password)
      .then(result =>{
          const user = result.user;
          console.log('login successfully', user)

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "login in completed successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace: true});

      })

    }
    const handleUser = (e) =>{
      e.preventDefault()
      
      const email = 'srabon@gmail.com'
      const password = 'Srabon123';

      login(email,password)
      .then(result =>{
          const user = result.user;
          console.log('login successfully', user)

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "login in completed successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace: true});

      })

    }
    return (

      <div>
        <div>
        <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>

        </div>

  <div className="card  w-full sm:w-3/4 md:w-1/2 lg:w-1/3  mx-auto shrink-0 shadow-2xl my-10">
           
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered"  />
         
          </div>
          <div className="form-control mt-6">
            <button className="btn  btn-primary">Login</button>
            <button onClick={handleGoogleLogin} className="btn  mt-2"><FaGoogle></FaGoogle> Login With Google</button>
        

          </div>
         <p>New here. please  <Link className="text-red-500" to='/register'>Register</Link></p>
        </form>
        <button onClick={handleAdmin} className="btn  my-3 text-white bg-primary">Admin Role</button>
        <button onClick={handleUser} className="btn  my-3 text-white bg-primary">User Role</button>
        
      </div>
    

      </div>
      
    );
};

export default Login;