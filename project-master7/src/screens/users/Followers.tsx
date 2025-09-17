import React from "react";
import { useOutlet, useOutletContext } from "react-router-dom";
function Followers(){

    interface IFollowersContext {
        nameOfMyUser:string
    }
    
    const {nameOfMyUser}=useOutletContext<IFollowersContext>();
    console.log(ctx);
    return <h1>Here are {nameOfMyUser}의 followers</h1>
}

export default Followers;