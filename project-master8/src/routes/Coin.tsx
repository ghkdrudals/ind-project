import React, { useState,useEffect } from "react";
import { useParams,useLocation } from "react-router-dom";
import styled from "styled-components";

type RouterParams={
    coinId:string;
}

const Title = styled.h1`
    font-size:48px;
    color:${(props)=>props.theme.accentColor};`

const Loader=styled.span`
    text-align:center;
    display:block;
`

const Header=styled.header`
height:10vh;
display:flex;
justify-content:center;
align-items:center;
`

const Continer=styled.div`
    padding:0px 10px;
    `

interface CoinIterface{
    id:string;
    name:string;
    symbol:string;
    rank:number;
    is_new:boolean;}

function Coin(){
    const [coins,setCoins]=useState<CoinIterface[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const {coinId} = useParams<RouterParams>();
    const {state}=useLocation();
    useEffect(()=>{
        (async () =>{
            const response:CoinIterface[] = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const pricedata = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            console.log(pricedata)
            setCoins(response.slice(0,100));
            setLoading(false);


        })();
    },[])
    console.log(state?.name || "Loading...");
    return <Continer>
    <Header>
        <Title>{state.name}</Title>
    </Header>
    {loading ? (<Loader>loading...</Loader>
    ):null}
    </Continer>
    
}

export default Coin;