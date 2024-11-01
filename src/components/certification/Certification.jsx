import React from "react";
import "./Certification.css";
import { certifications } from "./certificationsData";

const Certification = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="row">
          <div className="col p-2">
            <h2 className="certification-title">Certifications</h2>
            <div className="row row-cols-1 row-cols-md-4 g-2 certification-container ">
              {certifications.map((certication, index) => (
                <div className="col-auto card-group col-md-3 " key={index}>
                  <div
                    class="card certification h-100"
                    style={{ width: "18rem" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title">{certication.course}</h5>
                      <h6 class="card-subtitle mb-2 ">{certication.company}</h6>
                      <p class="card-text">
                        <span>{certication.duration.start}</span> --
                        <span> {certication.duration.end}</span>
                      </p>
                      <a
                        href={certication.link}
                        target="_blank"
                        class="card-link"
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
