import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skill from "./components/Skills/Skill";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
