import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
