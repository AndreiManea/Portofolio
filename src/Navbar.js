import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Squash as Hamburger } from "hamburger-react";
import { Link, animateScroll as scroll } from "react-scroll";
import { TweenMax, Power3 } from "gsap";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Navbar() {
  const [active, setActive] = useState(false);
  let navbar = useRef(null);
  useEffect(() => {
    TweenMax.to(navbar, 1, {
      opacity: 1,
      delay: 2,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="navbar-mobile" ref={(el) => (navbar = el)}>
      <div className="navbar-mobile__button">
        <Hamburger size={40} toggled={active} toggle={setActive} />
      </div>

      <div
        className={active ? "navbar-mobile__menu" : "navbar-mobile__menu--hide"}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          About
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={window.innerWidth > 768 ? -140 : 0}
          duration={500}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={window.innerWidth > 768 ? -100 : 0}
          duration={500}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          onClick={() => setActive(false)}
          duration={800}
          className="navbar-mobile__link"
        >
          Skills
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          onClick={() => setActive(false)}
          className="navbar-mobile__link"
        >
          Contact
        </Link>
        <div className="navbar-mobile__social-media">
          <a
            className="navbar-mobile__icon-link"
            href="https://github.com/AndreiManea"
            target="_blank"
          >
            <GitHubIcon className="navbar-mobile__icon" />
          </a>
          <a
            className="navbar-mobile__icon-link"
            href="https://www.instagram.com/andrei.codes/"
            target="_blank"
          >
            <InstagramIcon className="navbar-mobile__icon" />
          </a>
          <a
            className="navbar-mobile__icon-link"
            href="https://www.linkedin.com/in/andrei-manea-b422b8170/"
            target="_blank"
          >
            <LinkedInIcon className="navbar-mobile__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
