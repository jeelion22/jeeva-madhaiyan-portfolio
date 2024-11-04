import React from "react";
import "./Certification.css";
import { certifications } from "./certificationsData";

const Certification = () => {
  return (
    <section className="section" id="certifications">
      <div className="container container-xxl">
        <div className="row">
          <div className="col p-2">
            <h2 className="certification-title">Certifications</h2>
            <div className="row row-cols-1 row-cols-md-4 g-2 certification-container ">
              {certifications.map((certication, index) => (
                <div className="col-auto card-group col-md-3 " key={index}>
                  <div
                    className="card certification h-100"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{certication.course}</h5>
                      <h6 className="card-subtitle mb-2 ">
                        {certication.company}
                      </h6>
                      <p className="card-text">
                        <span>{certication.duration.start}</span> --
                        <span> {certication.duration.end}</span>
                      </p>
                      <a
                        href={certication.link}
                        target="_blank"
                        className="card-link"
                      >
                        view certication
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
