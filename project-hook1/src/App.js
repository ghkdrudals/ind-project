import "./App.css";
import { useState } from "react";
const useInput = (initialValue,validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target:{value}
    }=event;
    let willupdate=true
    if (typeof validator==="function"){
      willupdate = validator(value)
    }
    if (willupdate){
      setValue(value)
    }
    setValue(value)
  };
  return { value };
};
function App() {
  const maxlength = (value) => !value.includes("@")
  const name = useInput("Mr.",maxlength);
  const [count, setCount] = useState(0);
  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={plus}>up</button>
      <button onClick={minus}>down</button>
      <input {...name}></input>
    </div>
  );
}

export default App;
