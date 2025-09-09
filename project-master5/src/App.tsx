import styled from "styled-components";
import { useState } from "react";
import React from "react";

function App() {
  const[value, setValue] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);

  }
  return (
    <div className="App">
      <form>
        <input value={value} onChange={onChange} type="text" placeholder="usename"></input>
        <button>login</button>
      </form>
    </div>
  );
}

export default App;
