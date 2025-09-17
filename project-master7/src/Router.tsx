import React from "react";
import { createBrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import User from "./screens/users/User.tsx";
import NotFound from "./screens/NotFound.tsx";
import Followers from "./screens/users/Followers.tsx";

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
                children:[
                    {
                        path:"followers",
                        element:<Followers></Followers>
                    }
                ]
            }
        ],
        errorElement:<NotFound></NotFound>
    }
])

export default router;