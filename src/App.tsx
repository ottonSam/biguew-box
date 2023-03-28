import React from "react";

import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";
import Upload from "./components/Upload";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Container>
        <Content>
          <Upload />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
