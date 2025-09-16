import React from "react";
import { createBrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>
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
        ]
    }
])

export default router;