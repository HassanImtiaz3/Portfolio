import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import SkillsCarousel from "./SkillsCarousel";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Web development involves creating websites and web
                  applications using a combination of technologies like HTML and
                  CSS handle the structure and presentation, while React.js
                  enhances user interfaces with interactive components, along
                  with MySQL, enables server-side scripting and database
                  management.
                </p>
                <Carousel
                  responsive={responsive}
                  className="skill-slider"
                  infinite={true}
                  autoPlay={true}
                  interval={0}
                  transitionTime={1000}
                >
                  <SkillsCarousel img={meter1} tag={"C++"} />
                  <SkillsCarousel img={meter2} tag={"CSS"} />
                  <SkillsCarousel img={meter3} tag={"HTML"} />
                  <SkillsCarousel img={meter2} tag={"Javascript"} />
                  <SkillsCarousel img={meter2} tag={"ReactJs"} />
                  <SkillsCarousel img={meter3} tag={"WordPress"} />
                  <SkillsCarousel img={meter2} tag={"Shopify"} />
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          src={colorSharp}
          className="background-image-left"
          alt="Skills background"
        />
      </section>
      ;
    </>
  );
};

export default Skills;
