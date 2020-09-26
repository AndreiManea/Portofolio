import React from "react";
import "./Experience.scss";
function Experience() {
  return (
    <div className="experience" id="experience">
      <h1 className="experience__title">EXPERIENCE</h1>

      <img
        src={require("./assets/Images/Experience.svg")}
        alt=""
        className="experience__image"
      />
    </div>
  );
}

export default Experience;
