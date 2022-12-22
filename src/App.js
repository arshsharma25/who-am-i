import { useContext } from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";
import Nav from "./components/nav/Nav.jsx";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "black" : "wheat"
    , color: darkMode ? "white": "black"}}>
      <Toggle />
      <Nav />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
