import React from "react";
import "./Education.css";

const education = [
  {
    course: "Master of Philosophy",
    subject: "Theoretical Physics",
    year: "2015",
  },
  {
    course: "Master of Science",
    subject: "Physics",
    year: "2012",
  },
  {
    course: "Bachelor of Science",
    subject: "Physics",
    year: "2009",
  },
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container container-xxl">
        <div className="row">
          <div className="col">
            <div className="edu-container">
              <h2>Education</h2>
              <div className="education">
                <div className="vertical-line"></div>
                <div className="courses">
                  {education.map((edu, index) => (
                    <div className="course" key={index}>
                      <div
                        className={`horizontal-bubble h-bubble${index}`}
                      ></div>
                      <div className={`horizontal-line h-line${index}`}></div>
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">{edu.course}</h5>
                          <p className="card-text">{edu.subject}</p>
                          <p className="card-text">{edu.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
