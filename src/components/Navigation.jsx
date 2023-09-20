import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png"; // Corrected the paths
import navIcon1 from "../assets/img/nav-icon1.svg"; // Corrected the paths
import navIcon2 from "../assets/img/nav-icon2.svg"; // Corrected the paths
import navIcon3 from "../assets/img/nav-icon3.svg"; // Corrected the paths
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      setScroll(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  function openWhatsApp() {
    const phoneNumber = "+923097453701";
    const message = encodeURIComponent("Hey, let's connect!"); // Replace with your desired message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <>
      <Navbar expand="lg" className={scroll ? "scroll" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("home");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("about");
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("skills");
                }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  updateActiveLink("projects");
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/hassanimtiaz15/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/hassanimtiazip3/ "
                  target="_blank"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/hassan_imtiaz47/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <button className="vvd" onClick={() => openWhatsApp()}>
                {/* {" "} */}
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
