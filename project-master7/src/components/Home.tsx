import {useNavigate } from "react-router-dom";
import React from "react";
function Home(){
    const navigate=useNavigate()
    const onAboutClick=()=>{
        navigate("/about")
    }
    return(
        <header>
            <h1>Home</h1>
            <ul>
                <li>
                    <button onClick={onAboutClick}>Home</button>
                </li>
                <li>
                    <button onClick={onAboutClick}>About</button>
                </li>
            </ul>
        </header>
    )
}

export default Home;