import { users } from "../db"
import React from "react"
import { Link } from "react-router-dom"
function Header(){
    return(<div>
        <h1>Users</h1>
        <ul>
            {users.map(user=><li key={user.id}>{user.name}
                <Link to={`/user/${user.id}`}></Link>
            </li>)}
        </ul>
    </div>)
    }

export default Header