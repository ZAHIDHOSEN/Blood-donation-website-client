import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Search from "../Pages/Search/Search";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivetRoute from "../Route/PrivetRoute"
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import DonationRequest from "../Pages/Dashboard/UserDashboard.jsx/DonationRequest";
import AdminRoute from "../Route/AdminRoute"
import UserHome from "../Pages/Dashboard/UserDashboard.jsx/UserHome";
import MyDonationRequest from "../Pages/Dashboard/UserDashboard.jsx/MyDonationRequest";
import UserEdit from "../Pages/Dashboard/UserDashboard.jsx/UserEdit";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'search',
          element: <Search></Search>,
          loader: () => fetch('http://localhost:5000/district')
        },
        {
          path: 'register',
          element: <Register></Register>,
          loader: async () =>{
            const [districts, upazila] = await Promise.all([
              fetch('http://localhost:5000/district')
              .then(res => res.json()),
              fetch('http://localhost:5000/upazila')
              .then(res => res.json())
            ]);
            return {districts, upazila};
          }

          
        },
        {
          path:'login',
          element:<Login></Login>,
        }
      ]
   
    },
    {
      path: "dashboard",
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute> ,
      children: [
        {
          path: 'profile',
          element: <Profile></Profile>

        },
        {
          path: 'donationRequest',
          element: <DonationRequest></DonationRequest>,
          loader: async () =>{
            const [districts, upazila] = await Promise.all([
              fetch('http://localhost:5000/district')
              .then(res => res.json()),
              fetch('http://localhost:5000/upazila')
              .then(res => res.json())
            ]);
            return {districts, upazila};
          }

        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>

        },
        {
          path:'my-donation-requests',
          element:<MyDonationRequest></MyDonationRequest>
        },
        {
          path: 'edit/:id',
          element: <UserEdit></UserEdit>,
          loader: async ({params}) =>{
            const [districts, upazila, request] = await Promise.all([
              fetch('http://localhost:5000/district')
              .then(res => res.json()),
              fetch('http://localhost:5000/upazila')
              .then(res => res.json()),
              fetch(`http://localhost:5000/requests/${params.id}`)
              .then(res => res.json())
            ]);
            return {districts, upazila, request};
          }

          // loader: ({params}) => fetch(`http://localhost:5000/requests/${params.id}`)

        },
        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'all users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
    
      ]
    }
  ]);