import Router from "./routes/Router";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


function App (){
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
