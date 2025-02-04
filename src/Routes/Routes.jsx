import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Navbar from "../Layout/Share/Navbar";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/Home/SignUp/SignUp";
import AddTouristSpot from "../Pages/AddTourist/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSport/AllTouristSpot";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ViewDetails from "../Pages/AllTouristSport/ViewAllDetails/ViewDetails";
import MyList from "../Pages/MyList/MyList";
import Updated from "../Pages/MyList/Updated/Updated";
import SingleCountry from "../Pages/Home/Country/SingleCountry";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/addtour"),
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <AddTouristSpot />
          </PrivateRoutes>
        ),
      },
      {
        path: "/alltourist",
        element: (
          <PrivateRoutes>
            <AllTouristSpot />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/addtour"),
      },
      {
        path: "/view/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />,
          </PrivateRoutes>
        ),

        loader: () => fetch("http://localhost:5000/addtour"),
      },

      {
        path: "/mylist",

        element: (
          <PrivateRoutes>
            <MyList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: <Updated />,
        loader: () => fetch(`http://localhost:5000/Touristspot`),
      },
      {
        path:"/country/:country",
        element: <SingleCountry/>,
        loader: () => fetch(`http://localhost:5000/Touristspot`),
      }
    ],
  },
]);

export default Routes;
