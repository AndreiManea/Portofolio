import React from "react";
import Project from "./Project";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">PROJECTS</h1>
      <div className="container">
        <Project title="Amazon Clone" image="Amazon" />
        <Project title="Netflix Clone" image="Netflix" align="right" />
        <Project title="Spotify Clone" image="Amazon" />
      </div>
    </div>
  );
}

export default Projects;
