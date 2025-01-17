import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const UseAxiosSecure = () => {
    // request interceptors to add authorization headers for every secure call to the api 
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stoped by intercepter', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   intercepts 401 and 404 status
    axiosSecure.response.use(function(response){
      return response;

    }, function(error){
        const status = error.response.status;
        console.log('status error in the interceptor', status)
       return Promise.reject(error)
    })

    return axiosSecure;
   
};

export default UseAxiosSecure;