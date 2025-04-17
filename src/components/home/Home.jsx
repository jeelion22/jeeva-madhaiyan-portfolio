import React, { useEffect, useState } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Certification from "../certification/Certification";
import Education from "../education/Education";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import axios from "axios";

const Home = () => {
  const [visitorsCount, setVisitorsCount] = useState(0);
  const [totalVisits, setTotalVisits] = useState(0);

  const fetchVisitorsCount = async () => {
    try {
      const response = await axios.get(
        "https://jeeva-madhaiyan-portfolio-backend.onrender.com/visitors-count"
      );

      setVisitorsCount(response?.data?.totalVisitors);
    } catch (error) {
      console.log(console.log("Error fetching visitors count", error));
    }
  };

  const fetchTotalVisits = async () => {
    try {
      const response = await axios.get(
        "https://jeeva-madhaiyan-portfolio-backend.onrender.com/total-visits"
      );

      setTotalVisits(response?.data?.visitorsCount);
    } catch (error) {
      console.log(console.log("Error fetching visitors count", error));
    }
  };

  const updateVisitor = async () => {
    try {
      await axios("https://jeeva-madhaiyan-portfolio-backend.onrender.com");
    } catch (error) {
      console.log("Error updating visitor", error);
    }
  };

  useEffect(() => {
    const updateAndFetch = async () => {
      await updateVisitor();
      await fetchTotalVisits();
      await fetchVisitorsCount();
    };

    updateAndFetch();
  }, []);

  return (
    <div className="home">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certification />
      <Education />
      <Contact totalVisits={totalVisits} visitorsCount={visitorsCount} />
    </div>
  );
};

export default Home;
