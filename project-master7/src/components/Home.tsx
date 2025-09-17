import { Link } from "react-router-dom";
import React from "react";
function Home(){
    return(
        <header>
            <h1>Home</h1>
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

export default Home;