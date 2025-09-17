import React from 'react' 
import {users} from "../../db"
import { Outlet, useParams,Link} from 'react-router-dom';
function User(){
    const Params = useParams();
    return(
    <div>
    <h1>
    User with it {userId} is named:{users[Number(userId)-1]}
    </h1>
    <hr/>
    <Link to="followers">See Followers</Link>
    <Outlet context={{
        nameOfMyUser:users[Number(userId)-1].name,
    }}></Outlet>
    </div>
)
}
export default User