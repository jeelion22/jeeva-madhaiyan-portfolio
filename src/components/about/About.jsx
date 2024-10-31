import React from "react";
import "./About.css";
import ReactLOgo from "../../assets/react.svg";
import ProfilePicture from "./jeeva_madhaiyan.png";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-12 profile">
            <div className="introduction">
              <h2 className="title">MERN DEVELOPER</h2>
              <h3 className="greet">
                Hello, <br /> My name is Jeeva Madhaiyan
              </h3>
              <p>
                I'm a full-stack developer with a passion for building scalable,
                dynamic, and responsive web applications and solving problems.
              </p>
              <p>
                My experience spans front-end tools like HTML, CSS, JavaScript,
                and React, alongside back-end technologies such as Node.js,
                Express, and MongoDB.
              </p>
              <p>
                I enjoy staying updated on tech trends and am excited to bring
                my skills to projects in collaborative and dynamic environments.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className=" profile-picture text-center">
              <img
                src={ProfilePicture}
                className="img-fluid rounded "
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
