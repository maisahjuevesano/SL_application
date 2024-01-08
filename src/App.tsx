import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Nav } from "./components/Nav";
import { Header } from "./styled/styledHeader";
import { ThemeWrapper } from "./components/ThemeWrapper";

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Header>
          <Nav />
        </Header>
        <main className="App">
          <Outlet />
        </main>
        <footer></footer>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
