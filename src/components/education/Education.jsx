import React from "react";
import "./Education.css";

const education = [
  {
    course: "master of philosophy",
    subject: "Theoretical physics",
    year: "2015",
  },
  {
    course: "master of Science",
    subject: "physics",
    year: "2012",
  },
  {
    course: "batchelor of Science",
    subject: "physics",
    year: "2009",
  },
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Education</h2>
            {/* <table className="education">
              <tbody>
                {education.map((edu, index) => (
                  <tr key={index}>
                    <td>{edu.course}</td>
                    <td>{edu.subject}</td>
                    <td>{edu.year}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className="education">
              <div className="vertical-line"></div>
              <div className="courses">
                {education.map((edu, index) => (
                  <div className="course">
                    <div
                      className={`horizontal-bubble  h-bubble${index}`}
                    ></div>
                    <div className={`horizontal-line h-line${index}`}></div>
                    <div
                      class="card"
                      key={index}
                      h-100
                      style={{ width: "18rem" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">{edu.course}</h5>
                        <p class="card-text">{edu.subject}</p>
                        <p class="card-text">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
