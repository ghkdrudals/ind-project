import React from "react";
import { useParams } from "react-router-dom";

type RouterParams={
    coinId:string;
}

function Coin(){
    const {coinId} = useParams<RouterParams>();
    return <h1>coin: {coinId}</h1>
}

export default Coin;