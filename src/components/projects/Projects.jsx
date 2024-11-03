import React from "react";
import "./Projects.css";
import browserCode from "./icons/Browser-Code.png";
import serverCode from "./icons/Database-Server.png";
import web from "./icons/Web.png";

import { projectsInfo } from "./projectData";

const Project = ({ project }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="img">
          <img
            src={project.img}
            className="card-img-top"
            alt={project.name || "Project image"}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.purpose}</p>
        </div>
        <div className="card-footer">
          <div className="links">
            <div className="source">
              {project.links.client && (
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={browserCode} alt="Client" />
                </a>
              )}
              {project.links.server && (
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={serverCode} alt="Server" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={web} alt="live link" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container container-xxl">
        <div className="row">
          <div className="col-md-12 showcase-description">
            <h2 className="project-header">Showcases.</h2>
            <p>
              These are some highlight projects. <br /> Each page discusses the
              purpose of the project, what I learned, and how I came up with
              solutions.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 project-container">
          {projectsInfo.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
