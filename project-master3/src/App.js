import { keyframes } from "styled-components";
import styled from "styled-components";
const animation=keyframes`
0%{
transform:rotate(0deg);
border-radius:0px;
}
50%{
transform:rotate(360deg);
border-radius:50px;
}
100%{
transform:rotate(0deg);
border-radius:0px;
}

`

const Emoji=styled.span`

`
const Background=styled.div`
width:100%;
height:500px;
display:flex;
justify-content:center;
align-items:center;
`

const Card=styled.div`
width:100px;
height:100px;
display:flex;
justify-content:center;
align-items:center;
background-color:lightblue;
animation:${animation} 2s infinite;
${Emoji}{
display:flex;
justify-content:center;
align-items:center;
  width:50px;
  height:50px;
  background-color:blue;
  border-radius:50%;
  animation:move 2s infinite alternate;
  &:hover{
  font-size:98px;
  }
}
`

function App() {
  return (
    <Background>
      <Card>
        <Emoji as="p">😀</Emoji>
      </Card>
    </Background>
  );
}

export default App;
