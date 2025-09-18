import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color:${(props)=>props.theme.accentColor};`


function Coins(){
    return <h1>코인</h1>
}

export default Coins;