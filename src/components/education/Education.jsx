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
    year: "2012",
  },
];

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Education</h2>
            <table className="education">
              <tbody>
                {education.map((edu, index) => (
                  <tr key={index}>
                    <td>{edu.course}</td>
                    <td>{edu.subject}</td>
                    <td>{edu.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
