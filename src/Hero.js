import React, { useRef, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { TweenMax, Power3 } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Hero.scss";

function Hero() {
  let title = useRef(null);
  let description = useRef(null);
  let portofolioLink = useRef(null);
  let portofolioImage1 = useRef(null);
  let portofolioImage2 = useRef(null);

  useEffect(() => {
    TweenMax.to(title, 1, {
      opacity: 1,
      delay: 0.5,
      ease: Power3.easeOut,
    });
    TweenMax.to(description, 1, {
      opacity: 1,
      delay: 0.8,
      ease: Power3.easeOut,
    });
    TweenMax.to(portofolioLink, 1, {
      opacity: 1,
      delay: 1.1,
      ease: Power3.easeOut,
    });
    TweenMax.to(portofolioImage1, 1, {
      opacity: 0.5,
      delay: 1.4,
      ease: Power3.easeOut,
    });
    TweenMax.to(portofolioImage2, 1, {
      opacity: 0.5,
      delay: 1.7,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="hero">
      <div className="navbar">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="navbar__link"
        >
          About
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="navbar__link"
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbar__link"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="navbar__link"
        >
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="navbar__link"
        >
          Contact
        </Link>
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
          <h1 className="banner__title" ref={(el) => (title = el)}>
            ANDREI MANEA
          </h1>
          <h3 className="banner__description" ref={(el) => (description = el)}>
            FULL-STACK DEVELOPER
          </h3>
        </div>
        <div className="portofolio">
          <a
            href="#projects"
            className="portofolio__link"
            ref={(el) => (portofolioLink = el)}
          >
            <span>See My Portofolio </span>
            <ArrowForwardIcon />
          </a>
          <div className="portofolio__images">
            <a href="#projects">
              <img
                src={require("./assets/Images/Pizza Noastra.png")}
                ref={(el) => (portofolioImage1 = el)}
              />
            </a>
            <a href="#projects">
              <img
                src={require("./assets/Images/COVID19 Tracker.png")}
                ref={(el) => (portofolioImage2 = el)}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
