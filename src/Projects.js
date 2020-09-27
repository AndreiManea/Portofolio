import React from "react";
import Project from "./Project";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">PROJECTS</h1>
      <div className="container">
        <Project
          title="Pizza Noastra"
          image="Pizza Noastra"
          github="https://github.com/AndreiManea/Pizza-Noastra"
          website="https://pizzanoastra.ro/acasa"
        />
        <Project
          title="COVID-19 Tracker"
          image="COVID19 Tracker"
          align="right"
          github="https://github.com/AndreiManea/COVID19-Tracker"
          website="https://covid19-tracker-a0829.web.app/"
        />
        <Project
          title="Spotify Clone"
          image="Spotify Clone"
          github="https://github.com/AndreiManea/Spotify-Clone"
          website="https://spotify-clone-a04f0.web.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
