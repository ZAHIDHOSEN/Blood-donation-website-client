import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {user,login} = useContext(AuthContext);

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

        })


    }
    return (
        <div className="card  w-1/2 mx-auto shrink-0 shadow-2xl my-10">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>

          </div>
         <p>New here. please  <Link className="text-red-500" to='/register'>Register</Link></p>
        </form>
      </div>
    );
};

export default Login;