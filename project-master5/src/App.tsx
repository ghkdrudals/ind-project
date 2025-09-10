import styled from "styled-components";
import { useState } from "react";
import React from "react";

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
    <div onSubmit={onSubmit}>
      <form>
        <input value={value} onChange={onChange} type="text" placeholder="usename"></input>
        <button>login</button>
      </form>
    </div>
  );
}

export default App;
