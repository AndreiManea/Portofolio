import React from "react";
import "./Project.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

function Project({ image, title, align }) {
  return (
    <div>
      {align ? (
        <div className="project project--right">
          <h2 className="project__title project__title--right">{title}</h2>
          <div className="imageContainer">
            <img
              src={require(`./assets/Images/${image}.png`)}
              alt=""
              className="imageContainer__image"
            />
            <div className="imageContainer__info">
              <a href="#" className="icon">
                <GitHubIcon />
                <h3 className="icon__title icon__title--github">GitHub</h3>
              </a>
              <a href="#" className="icon">
                <LanguageIcon />
                <h3 className="icon__title">Website</h3>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="imageContainer">
            <img
              src={require(`./assets/Images/${image}.png`)}
              alt=""
              className="imageContainer__image"
            />
            <div className="imageContainer__info">
              <a href="#" className="icon">
                <GitHubIcon />
                <h3 className="icon__title icon__title--github">GitHub</h3>
              </a>
              <a href="#" className="icon">
                <LanguageIcon />
                <h3 className="icon__title">Website</h3>
              </a>
            </div>
          </div>
          <h2 className="project__title">{title}</h2>
        </div>
      )}
    </div>
  );
}

export default Project;
