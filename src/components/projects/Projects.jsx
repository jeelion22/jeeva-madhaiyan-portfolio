import React from "react";
import "./Projects.css";
import travelPlannerImg from "./travel-planner.png";
import reunitemeImg from "./reuniteme.png";

const Project = ({ project }) => {
  return (
    <div class="card h-100" style={{}}>
      <div className="img">
        <img
          src={project.img}
          class="card-img-top"
          alt={project.name || "Project image"}
        />
      </div>

      <div class="card-body">
        <h5 class="card-title">{project.name}</h5>
        <p class="card-text">{project.purpose}</p>

        <div className="links">
          <div className="source">
            <a href=""></a>
            <a href=""></a>
          </div>
          <div className="live">
            <a href=""></a>
          </div>
        </div>
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
            <h2 className="project-header">Showcases.</h2>

            <p>
              These are the some highlight projects. <br /> Each page discusses
              the purpose of the project, what I learnt, and how I came up with
              solution.{" "}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12">
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
