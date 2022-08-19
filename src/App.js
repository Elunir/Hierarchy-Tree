import './App.css';
import MyTree from './MyTree';
import styled from '@emotion/styled';

function App() {

  return (
    <Div className="App">
      <h1>My Tree</h1>
      <MyTree />
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
