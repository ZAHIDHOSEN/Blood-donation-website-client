import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Search from "../Pages/Search/Search";
import Register from "../Pages/Register/Register";


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
            const [district, upazila] = await Promise.all([
              fetch('http://localhost:5000/district')
              .then(res => res.json()),
              fetch('http://localhost:5000/upazila')
              .then(res => res.json())
            ]);
            return {district, upazila};
          }

          
        }
      ]
   
    },
  ]);