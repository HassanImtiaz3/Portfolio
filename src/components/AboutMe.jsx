import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import aboutImg from "../assets/img/contact-img.svg";
import { FaTelegramPlane } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <section className="aboutUs" id="about">
        <div className="about-heading">
          <h1 className="text-center">About Me</h1>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <ul className="about-list">
                <li>
                  <FaTelegramPlane className="planeIcon" /> Experienced web
                  developer proficient in JavaScript, HTML, CSS, MYSQL, C++, and
                  REACTJS.
                </li>
                <li>
                  <FaTelegramPlane className="planeIcon" /> Skilled in
                  translating client requirements into actionable solutions.
                </li>
                <li>
                  <FaTelegramPlane className="planeIcon" /> Driven by a love for
                  web development, I thrive on transforming ideas into
                  captivating digital realities.
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} xl={5} className="aboutme">
              <img src={aboutImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;
