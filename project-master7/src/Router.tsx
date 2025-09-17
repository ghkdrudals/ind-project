import React from "react";
import { createBrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import User from "./screens/users/User.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"",
                element:<Home/>
            }
            ,
            {
                path:"about",
                element:<About></About>
            }
            ,
            {
                path:"users/:userId",
                element:<User></User>
            }
        ],
        errorElement:<NotFound></NotFound>
    }
])

export default router;