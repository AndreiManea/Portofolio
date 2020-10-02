import React from "react";
import "./Project.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

function Project({ image, title, align, github, website }) {
  return (
    <div className="projectWrapper">
      {align ? (
        <div className="project project--right">
          <div className="project__container">
            <h2 className="project__title project__title--right">{title}</h2>
            <div className="project__buttons">
              <a href={github} className="project__button" target="_blank">
                <GitHubIcon />
                GitHub
              </a>
              <a href={website} className="project__button" target="_blank">
                <LanguageIcon />
                Website
              </a>
            </div>
          </div>

          <div className="image-container">
            <img
              src={require(`../../../assets/Images/${image}.png`)}
              alt=""
              className="image-container__image"
            />
            <div className="image-container__info">
              <a href={github} className="icon" target="_blank">
                <GitHubIcon />
                <h3 className="icon__title icon__title-github">GitHub</h3>
              </a>
              <a href={website} className="icon" target="_blank">
                <LanguageIcon />
                <h3 className="icon__title">Website</h3>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="image-container">
            <img
              src={require(`../../../assets/Images/${image}.png`)}
              alt=""
              className="image-container__image"
            />
            <div className="image-container__info">
              <a href={github} className="icon" target="_blank">
                <GitHubIcon />
                <h3 className="icon__title icon__title-github">GitHub</h3>
              </a>
              <a href={website} className="icon" target="_blank">
                <LanguageIcon />
                <h3 className="icon__title">Website</h3>
              </a>
            </div>
          </div>

          <div className="project__container">
            <h2 className="project__title">{title}</h2>
            <div className="project__buttons">
              <a href={github} className="project__button" target="_blank">
                <GitHubIcon />
                GitHub
              </a>
              <a href={website} className="project__button" target="_blank">
                <LanguageIcon />
                Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
