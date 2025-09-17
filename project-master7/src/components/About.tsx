import { Link } from "react-router-dom";
import React from "react";
function About(){
    return(
        <header>
            <h1>About</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </header>
    )
}

export default About;