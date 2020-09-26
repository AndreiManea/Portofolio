import React from "react";
import "./Skills.scss";
function Skills() {
  return (
    <div className="skills" id="skills">
      <img
        src={require("./assets/Images/Skills.svg")}
        alt=""
        className="skills__image"
      />
      <div className="info">
        <h1 className="info__title">SKILLS</h1>
        <p className="info__description">
          When it comes to skills, depending on the project, I like to create
          websites or applications using the technologies in the illustration.
        </p>
        <p className="info__description">
          If I had to pick a favorite, that would be
          <span style={{ color: "#08FDD8" }}> React.js </span>
          because of the community and support behind it.
        </p>
      </div>
    </div>
  );
}

export default Skills;
