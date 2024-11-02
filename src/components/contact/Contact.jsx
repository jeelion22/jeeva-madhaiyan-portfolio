import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faGitAlt,
  faGithub,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <h2 className="contact-header">Contact</h2>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="contact-description">
                  <div className="support">
                    <p className="support-tag">Let's work together</p>
                  </div>

                  <div className="mail">
                    <h4 className="mail-header">Mail</h4>
                    <p className="email-address">jeelion22@gmail.com</p>
                  </div>

                  <div className="address">
                    <h4 className="address-header">Address</h4>
                    <p className="work-address">Dharumapuri, India</p>
                  </div>

                  <div className="phone">
                    <h4 className="phone-header">Phone</h4>
                    <p className="phone-number">
                      <span>+91</span>-<span>96770</span> <span>61448</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className=" form-container">
                  <form action="">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <textarea
                      name="messaGE"
                      id="message"
                      rows="5"
                      placeholder="message"
                    ></textarea>
                    <button>Submit</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col social col-md-12">
                <div className="social-links mt- pt-2">
                  <a
                    href="https://www.linkedin.com/in/jeeva-madhaiyan-090860107/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="me-2 "
                    />
                  </a>
                  <a href="https://github.com/jeelion22" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>
                <div className="copy-right text-center pb-4">
                  <p>Handcrafted by Jeeva Madhaiyan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
