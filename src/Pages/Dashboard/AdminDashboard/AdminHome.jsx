import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { FaDochub, FaUser } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa6';

const AdminHome = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const [state, setState] = useState([])
    const [allRequests, setAllRequests] = useState([])


    useEffect(()=>{
        axiosSecure.get('/users')
        .then(res =>{
            const users = res.data;
            const donors = users.filter(user=> user.role !== 'admin')
            setState(donors)
        
        })
    },[axiosSecure])

    useEffect(() =>{
        axiosSecure.get('/requests/adminHome')
        .then(res =>{
           setAllRequests(res.data)
        })

    },[axiosSecure])

  
    return (
        <div>
           <div>
           <h2 className='text-center text-3xl font-bold my-5'>Welcome {user.displayName} in Admin Dashboard</h2>
           <p className='text-center'>Manage user, blood donation requests, and more ....</p>
           </div>

           <div className='w-8/12 mx-auto bg-slate-100 gap-10'>
           
            <div className='bg-red-400 gap-2 border rounded-xl my-10  '>
                <div className='flex justify-center'>
                    <FaUser></FaUser>
                </div>
                <div>
                    <p className='text-black text-center'>Total user</p>
                    <h3 className='text-2xl font-bold text-center'>{state.length}</h3>
                </div>

            </div>
            <div className=' gap-5 mt-5 bg-slate-500 rounded-xl'>
                <div className='flex justify-center'>
                  <FaUser></FaUser>
                </div>
                <div>
                    <p className='text-white text-center'>All blood request</p>
                    <h3 className='text-2xl font-bold text-center'>{allRequests.length}</h3>
                </div>

            </div>

        

           </div>

      

    

         
        </div>
    );
};

export default AdminHome;