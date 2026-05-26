import Hero from "./Hero";
import "./App.css";
import Navbar from "./navbar";
import "./navbar.css";
import "./Hero.css";
import Project from "./project";
import "./project.css";
import Skills from "./skills";
import "./skills.css";
import Contact from "./contact";
import "./contact.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
