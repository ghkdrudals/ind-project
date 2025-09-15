import styled from "styled-components";
import { useState } from "react";
import React from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgClor};
`
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`
function App() {
  const[value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget:{value}} = event;
    setValue(value);

  }
  const onSubmit=(event:React.FormEvent<HTMLInputElement>)=>{
    event.preventDefault();
    console.log("hello",value)
  }
  return (
    <Container onSubmit={onSubmit}>
      <H1>protected</H1>
      <form>
        <input value={value} onChange={onChange} type="text" placeholder="usename"></input>
        <button>login</button>
      </form>
    </Container>
  );
}

export default App;
