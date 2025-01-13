import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2 className="4xl">404</h2>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
   
    },
  ]);