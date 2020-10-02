import React from "react";
import "./About.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
function About() {
  return (
    <div className="about" id="about">
      <div className="about__divider"></div>
      <div className="container">
        <div className="container__left">
          <div className="image">
            <div className="image__photo" alt=""></div>
            <div className="image__background"></div>
          </div>
        </div>
        <div className="container__right">
          <div className="information">
            <h3 className="information__section">ABOUT</h3>
            <h2 className="information__title">PASSIONATE</h2>
            <p className="information__description">
              Freshly BSc computer science graduate, if there's one thing I love
              doing, that would be designing and developing websites. Through my
              career, I've always tried to improve and be better. I'm a fast
              learner with a lot of potential and room for growth.
            </p>
            <p className="information__description information__description--last">
              Besides the technical part of this industry, I think it's very
              important to be empathic and compassionate. This helped me breathe
              more life into my websites and designs because I could better
              understand the problems or the requirements customers had.
            </p>
            <a href="/Andrei_Manea_Resume.pdf" download>
              <button className="information__CV">
                <GetAppIcon /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
