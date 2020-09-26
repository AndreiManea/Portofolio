import React from "react";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <div className="about__divider"></div>
      <div className="container">
        <div className="container__left">
          <div className="image">
            <img src={require("./assets/Images/About.jpg")} alt="" />
            <div className="image__background"></div>
          </div>
        </div>
        <div className="container__right">
          <div className="information">
            <h3 className="information__section">ABOUT</h3>
            <h2 className="information__title">PASSIONATE</h2>
            <p className="information__description">
              If there's one thing I love doing, that would be designing and
              developing websites. Through my career, I've always tried to
              improve and be better. I'm a fast learner with a lot of potential
              and room for growth.
            </p>
            <p className="information__description">
              Besides the technical part of this industry, I think it's very
              important to be empathic and compassionate. This helped me to
              breathe life into my websites and designs because it helped me
              better understand the problem or the requirements customers had.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
