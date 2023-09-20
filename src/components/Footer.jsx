import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png"; // Corrected the paths
import navIcon1 from "../assets/img/nav-icon1.svg"; // Corrected the paths
import navIcon2 from "../assets/img/nav-icon2.svg"; // Corrected the paths
import navIcon3 from "../assets/img/nav-icon3.svg"; // Corrected the paths

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="text-center">
            <Col sm={4} md={4}>
              <a
                href="https://www.linkedin.com/in/hassanimtiaz15/"
                target="_blank"
              >
                <img src={navIcon1}  alt="icon" />
              </a>
            </Col>
            <Col sm={4} md={4}>
              <a
                href="https://www.facebook.com/hassanimtiazip3/"
                target="_blank"
              >
                <img src={navIcon2} alt="icon" />
              </a>
            </Col>
            <Col sm={4} md={4}>
              <a
                href="https://www.instagram.com/hassan_imtiaz47/"
                target="_blank"
              >
                <img src={navIcon3} alt="icon" />
              </a>
            </Col>
            <p>CopyRight 2023. All Right Reserved by Hooman Production</p>
          </Row>
        </Container>

       
      </footer>
    </>
  );
};

export default Footer;
