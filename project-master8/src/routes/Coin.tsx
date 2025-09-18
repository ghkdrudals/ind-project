import React from "react";
import { useParams } from "react-router-dom";

function Coin(){
    const {coinId} = useParams();
    return <h1>coin</h1>
}

export default Coin;