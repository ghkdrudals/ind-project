import React from "react"
import {Link} from "react-router-dom"
function Header(){
    return <header>
        <ul>
        <li><Link to={"/"}>home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        </ul>
    </header>
}