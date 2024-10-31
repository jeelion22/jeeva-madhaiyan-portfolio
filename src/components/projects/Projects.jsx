import React from "react";
import "./Projects.css";
import travelPlannerImg from "./travel-planner.png";
import reunitemeImg from "./reuniteme.png";

const TechStack = ({ tech }) => {
  return <div className="technology">{tech}</div>;
};

const Project = ({ project }) => {
  return (
    <div class="card h-100">
      <div className="img">
        <img
          src={project.img}
          class="card-img-top"
          alt={project.name || "Project image"}
        />
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <TechStack tech={tech} key={index} />
          ))}
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">{project.name}</h5>
        <p class="card-text">{project.purpose}</p>

        <button>VIEW PROJECT</button>
      </div>
    </div>
  );
};

const projectsInfo = [
  {
    name: "ReUniteME",
    img: reunitemeImg,
    purpose:
      "A platform connecting mentally ill and missing individuals with their families.",
    technologies: [
      "ReactJS",
      "Axios",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWS",
      "Mongoose",
      "AWS S3",
    ],
  },
  {
    name: "Travel Planner India",
    img: travelPlannerImg,
    purpose:
      "An Indian travel planning tool with itinerary and budget management.",
    technologies: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWS",
      "Mongoose",
    ],
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="row ">
          <div className="col-md-12 showcase-description">
            <h2 className="header">Showcases.</h2>

            <p>
              These are the some highlight projects. <br /> Each page discusses
              the purpose of the project, what I learnt, and how I came up with
              solution.{" "}
            </p>

            <div className="project-container">
              {projectsInfo.map((project, index) => (
                <Project project={project} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
