import { users } from "../db"
import React from "react"
import { Link, useSearchParams } from "react-router-dom"
function Header(){
    const [readSearchParams,setSearchParams]=useSearchParams();
    console.log(readSearchParams.get("geo"))
    setTimeout(()=>{
        setSearchParams({
            day:"today",
            tomorrow:"123"
        }
        )
    })
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