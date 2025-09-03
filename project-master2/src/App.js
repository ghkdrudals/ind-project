import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display:flex;
`
const animation = keyframes`
0%{
transform: rotate(0deg);
border-radius:0;
}
50%{
transform: rotate(360deg);
border-radius:50%;
}
100%{
transform: rotate(0deg);
border-radius:0;
}
`;

const Box = styled.div`
height:200px;
width:200px;
background-color:tomato;
display:flex;
justify-content:center;
align-items:center;
animation:${animation} 2s linear infinite;
span{
font-size:36px;
width:50px;
height:50px;
border:0;
border-radius:25px;
display:flex;
justify-content:center;
align-items:center;
&:hover{
background-Color:white;}

}
&:active{
opacity:0;
}
`
function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

export default App;
