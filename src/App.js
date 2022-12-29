import { useContext } from "react";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/Intro.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";
import Nav from "./components/nav/Nav.jsx";
import Experience from "./components/experience/Experience";
import Timeline from "./components/timeline/Timeline";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#27252c" : "wheat"
    , color: darkMode ? "white": "#27252c"}}>
      <Toggle />
      <Nav />
      <Intro />
      <About />
      <Timeline />
      <Experience />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
