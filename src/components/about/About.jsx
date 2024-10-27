import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container-fluid  section" id="about">
      <div className="row">
        <div className="col introduction">
          <h2 className="title">MERN DEVELOPER</h2>
          <h3 className="greet">
            Hello, <br /> My name is Jeeva Madhaiyan
          </h3>
          <p>
            I'm a full-stack developer with a passion for building scalable and
            responsive web applications.
          </p>
          <p>
            I have experience with front-end tools like HTML, CSS, JavaScript,
            and React, along with back-end expertise in Node.js, Express, and
            MongoDB.
          </p>
          <p>
            I enjoy learning about new tech trends and am excited to bring my
            skills to projects in dynamic, collaborative environments and
            real-world problems.
          </p>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
};

export default About;
