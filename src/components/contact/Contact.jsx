import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Badge, Box, Stack, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_iD = import.meta.env.VITE_EMAILjs_TEMPLATE_iD;
const TEMPLATE_PARAMS = import.meta.env.VITE_EMAILjs_TEMPLATE_PARAMS;

const Contact = ({ visitorsCount, totalVisits }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [status, setStatus] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <section className="section " id="contact">
      <div className="container container-xxl">
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
                  {/* <form action="" ref={formRef} onSubmit={sendEmail}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                    <textarea
                      name="messaGE"
                      id="message"
                      rows="5"
                      placeholder="message"
                    ></textarea>
                    <button disabled={isSubmit}>
                      {isSubmit ? "Submitting" : "Submit"}
                    </button>
                    {status && <p>{status}</p>}
                  </form> */}

                  <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, { resetForm, setSubmitting }) => {
                      setIsSubmit(true);
                      try {
                        await emailjs.send(
                          SERVICE_ID,
                          TEMPLATE_iD,
                          values,

                          TEMPLATE_PARAMS
                        );
                        alert("Message sent successfully!");
                        resetForm();
                      } catch (error) {
                        console.log(error);
                        setStatus("Error");
                      } finally {
                        setIsSubmit(false);
                        setSubmitting(false);
                      }
                    }}
                  >
                    {(formik) => (
                      <Form onSubmit={formik.handleSubmit}>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <Field
                          as="textarea"
                          rows={5}
                          name="message"
                          placeholder="Message"
                          required
                        />
                        <button type="submit" disabled={isSubmit}>
                          {isSubmit ? "Submitting" : "Submit"}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>

            <div className="row footer">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction={"row"} spacing={4}>
                  <Box sx={{ textAlign: "center" }}>
                    <Badge
                      badgeContent={visitorsCount}
                      max={999}
                      color="primary"
                    >
                      <GroupsIcon color="primary" />
                    </Badge>
                    <Typography color="rgb(14, 139, 10)">Visitors</Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Badge badgeContent={totalVisits} max={999} color="primary">
                      <VisibilityIcon color="primary" />
                    </Badge>
                    <Typography color="rgb(14, 139, 10)">Views</Typography>
                  </Box>
                </Stack>
              </Box>
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
                  <p>Crafted by Jeeva Madhaiyan</p>
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
