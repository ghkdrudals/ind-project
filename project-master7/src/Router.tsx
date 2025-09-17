import React from "react";
import { createBrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";

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
        ],
        errorElement:<NotFound></NotFound>
    }
])

export default router;