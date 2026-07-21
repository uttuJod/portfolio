import React from "react";
import "../assets/styles/Project.scss";

interface ProjectItem {
  title: string;
  description: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Robust Deepfake Detection",
    description:
      "Developed a robust deepfake detection pipeline for the NTIRE 2026 Challenge using a CLIP ViT-L/14 model with constrained adaptation. Designed a three-stage training strategy with degradation-aware augmentation, five-fold cross-validation, model ensembling, and test-time augmentation, achieving a ROC-AUC score of 0.8341.",
  },
  {
    title: "Ralph Orchestrator",
    description:
      "Contributed to the open-source Ralph Orchestrator project by building a Homebrew formula in Ruby for one-command macOS installation. Resolved Windows and macOS packaging conflicts and fixed Python virtual-environment and pip dependency issues.",
    link: "https://github.com/uttuJod/ralph-orchestrator",
  },
  {
    title: "Cloud-Native Media Processing System",
    description:
      "Designed and deployed a scalable microservices-based system on AWS for secure video uploads, asynchronous MP4-to-MP3 processing, and automated email notifications using event-driven queues and containerised services.",
    link: "https://github.com/uttuJod/microservices-python-app",
  },
  {
    title: "Earth-to-Moon Networking",
    description:
      "Developed a computer-network simulation for communication between a lunar rover and an Earth station. Modelled long-distance delay, jitter, packet loss, and corruption, and implemented UDP-based channels for commands, acknowledgements, sensor data, and video streaming.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{project.title}</h2>
              </a>
            ) : (
              <h2>{project.title}</h2>
            )}

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;