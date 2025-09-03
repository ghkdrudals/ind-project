import React from "react";
import styled from "styled-components"

interface ContainerProps{
    bgColor:string;
}

const Container=styled.div<ContainerProps>`
width:200px;
height:200px;
background-color:${(props)=>props.bgColor};
border-radius:100px;

`
interface PlayerShape{
name:string;
age:number;
}
const sayHello=(playerObject:PlayerShape)=>`Hello ${playerObject.name} you are ${playerObject.age} years old`;
interface CircleProps{
    bgColor:string;
}
sayHello({name:"nico",age:10});
function Circle({bgColor}:CircleProps){
    return (
        <Container bgColor={bgColor}>

        </Container>
    )
}

export default Circle;