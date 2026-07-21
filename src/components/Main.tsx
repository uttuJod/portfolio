import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../assets/styles/Main.scss";
import profilePic from "../assets/images/profliepic-modified.jpeg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={profilePic}
            alt="Utkarsh Tiwari"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/uttuJod"
              target="_blank"
              rel="noreferrer"
              aria-label="Utkarsh Tiwari GitHub profile"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/utkarsh-tiwari-60922632b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Utkarsh Tiwari LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Utkarsh Tiwari</h1>
          <p>Computer Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/uttuJod"
              target="_blank"
              rel="noreferrer"
              aria-label="Utkarsh Tiwari GitHub profile"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/utkarsh-tiwari-60922632b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Utkarsh Tiwari LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;