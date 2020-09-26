import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="navbar">
        <a href="#about" className="navbar__link">
          About
        </a>
        <a href="#experience" className="navbar__link">
          Experience
        </a>
        <a href="#projects" className="navbar__link">
          Projects
        </a>
        <a href="#skills" className="navbar__link">
          Skills
        </a>
        <a href="#contact" className="navbar__link">
          Contact
        </a>
      </div>
      <div className="sidebar">
        <a
          className="sidebar__link"
          href="https://github.com/AndreiManea"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a className="sidebar__link" href="#" target="_blank">
          <InstagramIcon />
        </a>
        <a
          className="sidebar__link"
          href="https://www.linkedin.com/in/andrei-manea-b422b8170/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="hero__center">
        <div className="banner">
          <h1 className="banner__title">ANDREI MANEA</h1>
          <h3 className="banner__description">FULL-STACK DEVELOPER</h3>
        </div>
        <div className="portofolio">
          <a href="#projects" className="portofolio__link">
            <span>See My Portofolio </span>
            <ArrowForwardIcon />
          </a>
          <div className="portofolio__images">
            <a href="#projects">
              <img src={require("./assets/Images/Amazon.png")} />
            </a>
            <a href="#projects">
              <img src={require("./assets/Images/Netflix.png")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
