import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Certification from "../certification/Certification";
import Education from "../education/Education";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certification />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
