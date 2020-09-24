import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="navbar">
        <a href="#" className="navbar__link">
          About
        </a>
        <a href="#" className="navbar__link">
          Experience
        </a>
        <a href="#" className="navbar__link">
          Projects
        </a>
        <a href="#" className="navbar__link">
          Skills
        </a>
        <a href="#" className="navbar__link">
          Contact
        </a>
      </div>
      <div className="sidebar">
        <a className="sidebar__link" href="#">
          <FacebookIcon />
        </a>
        <a className="sidebar__link" href="#">
          <InstagramIcon />
        </a>
        <a className="sidebar__link" href="#">
          <LinkedInIcon />
        </a>
      </div>
      <div className="hero__center">
        <div className="banner">
          <h1 className="banner__title">ANDREI MANEA</h1>
          <h3 className="banner__description">FULL-STACK DEVELOPER</h3>
        </div>
        <div className="portofolio">
          <a href="#" className="portofolio__link">
            <span>See My Portofolio </span>
            <ArrowForwardIcon />
          </a>
          <div className="portofolio__images">
            <a href="#">
              <img src={require("./assets/Images/Amazon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/Images/Netflix.png")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
