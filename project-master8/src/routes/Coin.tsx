import React, { useState } from "react";
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

function Coin(){
    const[loading,setLoading]=useState(true);
    const {coinId} = useParams<RouterParams>();
    const {state}=useLocation<{}}>();
    return <Continer>
    <Header>
        <Title>Coins{coinId}</Title>
    </Header>
    {loading ? (<Loader>loading...</Loader>
    ):null}
    </Continer>
    
}

export default Coin;