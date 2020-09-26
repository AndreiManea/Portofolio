import React from "react";
import About from "./About";
import "./App.css";
import Experience from "./Experience";
import Hero from "./Hero";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
