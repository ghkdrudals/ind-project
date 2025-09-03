import { keyframes } from "styled-components";
import styled from "styled-components";

const Title = styled.h1`
color:{props => props.theme.textColor};
`

const Wrapper =  styled.div`
display:flex;
height:100vh;
width:100vw;
justify-content:center;
align-items:center;
background-color:{props => props.theme.backgroundColor};
`

function App() {
  return (

  );
}

export default App;
