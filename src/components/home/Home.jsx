import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Certification from "../certification/Certification";
import Education from "../education/Education";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
