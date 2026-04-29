import Hero from "./components/Hero";
// import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;