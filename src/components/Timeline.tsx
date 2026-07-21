import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="May 2025 – September 2025"
            iconStyle={{
              background: "#5000ca",
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              IIT Bombay — Mumbai, India
            </h4>

            <p>
              Enhanced a genetic algorithm for 2D nesting, improving
              material utilisation by 26% and reducing runtime by 30%.
              Automated CNC laser workflows using Python and C++, reducing
              setup effort by 60%. Applied modular software design,
              Git-based collaboration, and systematic debugging.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="June 2024 – August 2024"
            iconStyle={{
              background: "#5000ca",
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cloud Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Genpact — Delhi, India
            </h4>

            <p>
              Developed Spring Boot services using AWS S3, EC2, RDS,
              Elastic Beanstalk, and CloudWatch. Built secure file and
              customer management functionality, improved deployment
              workflows, and supported reliable cloud monitoring.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="September 2022 – May 2026"
            iconStyle={{
              background: "#5000ca",
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering in Computer Engineering
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Trinity College Dublin — Dublin, Ireland
            </h4>

            <p>
              Graduated with a 2:1 degree classification. Developed skills
              in software engineering, computer networks, distributed
              systems, cloud computing, databases, artificial intelligence,
              and programming.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;