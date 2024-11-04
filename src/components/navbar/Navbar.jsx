import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navItems = [
  "about",
  "projects",
  "skills",
  "certifications",
  "education",
  "contact",
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // define function to scroll
  const scrollToSection = (sectionId) => {
    const elmnt = document.getElementById(sectionId);

    if (elmnt) {
      const marginTop = 0;
      const scrollToY =
        elmnt.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({
        top: scrollToY,
        // behavior: "smooth",
      });
    }
  };

  const determineActiveSection = () => {
    for (let i = 0; i <= navItems.length - 1; i++) {
      const section = document.getElementById(navItems[i]);

      if (section) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(navItems[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          {`Web Developer`}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((navItem, index) => (
              <li
                className="nav-item"
                key={index}
                onClick={() => scrollToSection(navItem)}
              >
                <Link
                  to={`#${navItem}`}
                  className={`nav-link ${
                    activeLink === navItem ? "active" : ""
                  }`}
                >
                  {navItem[0].toUpperCase() + navItem.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
