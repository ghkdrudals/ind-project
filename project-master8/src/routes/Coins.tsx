import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Continer=styled.div`
    padding:0px 10px;
    `

const Header=styled.header`
height:10vh;
display:flex;
justify-content:center;
align-items:center;
`

const CoinsList=styled.ul``

const Coin=styled.li`
    background-color:white;
    color:${(props)=>props.theme.bgColor};
    padding:20px;
    border-radius:15px;
    margin-bottom:10px;
    &:hover{
    a{
        display:block;
        align-items:center;
        color:${(props)=>props.theme.accentColor};
    }
    }
`

const Loader=styled.span`
    text-align:center;
    display:block;
`

interface CoinInterface{

    id:"string",
    name:"string",
    symbol:"string",
    rank:number,
    is_new:boolean,
    is_active:boolean,
    type:"string"
}

const Title = styled.h1`
    font-size:48px;
    color:${(props)=>props.theme.accentColor};`

const Img = styled.img`
    width:5vw;
    height:5vw;
    margin-right:10px;
`

const coins = [
    {
        id:"btc-bitcoin",
        name:"Bitcoin",
        symbol:"BTC",
        rank:1,
        is_new:false,
        is_active:true,
        type:"coin"
    }
    ,
    {
        id:"eth-ethereum",
        name:"Ethereum",
        symbol:"ETH",
        rank:2,
        is_new:false,
        is_active:true,
        type:"coin"
    }
    ,{
        id:"hex-hex",
        name:"HEX",
        symbol:"HEX",
        rank:3,
        is_new:false,
        is_active:true,
        type:"token"
    }
]
function Coins(){
    const [coins,setCoins]=useState<CoinInterface[]>([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        (async()=>{
            const response = await fetch("https://api.coinpaprika.com/v1/coins")
            const json = await response.json()
            setCoins(json.slice(0,100))
            setLoading(false)
        })()
    },[])
    console.log(coins)
    return(
         <Continer>
        <Header>
            <Title>Coins</Title>
        </Header>
        {loading ? (<Loader>loading...</Loader>):<CoinsList>
            {coins.map(coin => <Coin key={coin.id}>
                <Link to={{
                    pathname:`/${coin.id}`,
                    state:{name:coin.name},
                }}>
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/btc/${coin.symbol.toLowerCase()}`}></Img>
                {coin.name} &rarr;</Link>
            </Coin>)}
        </CoinsList>}
    </Continer>
    )
}

export default Coins;