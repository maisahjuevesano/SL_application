// import React from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { GlobalStyle } from "./styled/Layout";
import { Header } from "./styled/styledHeader";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header>
        <Nav></Nav>
      </Header>
      <main className="App">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
