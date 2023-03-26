import React from "react";

import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <div className="App">
        <h1>Opa my friend, hello world!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
