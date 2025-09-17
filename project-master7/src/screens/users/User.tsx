import React from 'react' 
import {users} from "../../db"
import { useParams } from 'react-router-dom';
function User(){
    const Params = useParams();
    return <h1>User with it {userId} is named:{users[Number(userId)-1]}</h1>
}
export default User