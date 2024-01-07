import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { GlobalStyle } from "./styled/Layout";
import { Header } from "./styled/styledHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Nav />
      </Header>
      <main className="App">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
