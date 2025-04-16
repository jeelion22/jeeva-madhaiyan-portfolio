import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { Box, Paper } from "@mui/material";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container container-xxl">
        <div className="row">
          <div className="col p-2">
            <h2 className="experience-title mb-4">Experience</h2>

            {/* Experience Card */}
            <ExperienceCard />

            {/* Add more cards if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
