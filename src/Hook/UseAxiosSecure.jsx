import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://blood-donation-server-tan-nine.vercel.app'
    
})



const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);
    // request interceptors to add authorization headers for every secure call to the api 
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stoped by intercepter', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   intercepts 401 and 404 status
    axiosSecure.interceptors.response.use(function(response){
      return response;

    }, async (error) =>{
        const status = error.response.status;
        // console.log('status error in the interceptor', status)
        // for 401 or 403 logout the user and move the user to the login

        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')

        }
       return Promise.reject(error)
    })

    return axiosSecure;
   
};

export default UseAxiosSecure;