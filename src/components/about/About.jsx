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
                I'm a full-stack developer with a passion for building scalable
                and responsive web applications.
              </p>
              <p>
                I have experience with front-end tools like HTML, CSS,
                JavaScript, and React, along with back-end expertise in Node.js,
                Express, and MongoDB.
              </p>
              <p>
                I enjoy learning about new tech trends and am excited to bring
                my skills to projects in dynamic, collaborative environments and
                real-world problems.
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
