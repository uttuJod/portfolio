import React from "react";
import "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import Chip from "@mui/material/Chip";

import "../assets/styles/Expertise.scss";

const softwareEngineeringSkills = [
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "JavaScript",
  "React.js",
  "Spring Boot",
  "HTML",
  "CSS",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
];

const cloudAndDevOpsSkills = [
  "AWS",
  "Amazon EC2",
  "Amazon S3",
  "Amazon RDS",
  "Elastic Beanstalk",
  "CloudWatch",
  "Docker",
  "Git",
  "GitHub Actions",
  "CI/CD",
  "Microservices",
  "Distributed Systems",
];

const aiAndResearchSkills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "CLIP ViT-L/14",
  "Deepfake Detection",
  "Genetic Algorithms",
  "Cross-Validation",
  "Data Augmentation",
  "Model Ensembling",
  "Test-Time Augmentation",
  "Python Automation",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />

            <h3>Software Engineering</h3>

            <p>
              I build maintainable software applications using modern
              programming languages, frontend technologies, backend
              frameworks, relational databases, and REST APIs. My experience
              includes developing cloud-based services and applying modular
              design, debugging, and version-control practices.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {softwareEngineeringSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />

            <h3>Cloud, DevOps & Distributed Systems</h3>

            <p>
              I have developed and deployed cloud-native applications using
              AWS services, Docker, microservices, event-driven processing,
              and CI/CD workflows. I am experienced with secure file storage,
              cloud databases, application monitoring, and asynchronous
              distributed systems.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {cloudAndDevOpsSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />

            <h3>Artificial Intelligence & Research Engineering</h3>

            <p>
              I develop experimental AI and optimisation systems with a focus
              on computer vision, deepfake detection, model robustness, and
              genetic algorithms. My work includes degradation-aware training,
              cross-validation, model ensembling, test-time augmentation, and
              automated engineering workflows.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {aiAndResearchSkills.map((label) => (
                <Chip key={label} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;