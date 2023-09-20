import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import cc from "../assets/img/comp.webp";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "I've built Portofino with the help of HTML, CSS, Javascript, and Bootstrap.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/CodSoft_Task2",
      demo: "https://codsoftask2.netlify.app/",
      type: "front",
    },
    {
      title: "Arizona-Pink-Limo's",
      description:
        "Client Static Page Project.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/Arizona-Pink-Limo-s",
      demo: "https://arizonapink.netlify.app/",
      type: "front",
    },
    {
      title: "Veterinarian",
      description: "Fully Responsive Front-End project.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/Veterinarian",
      demo: "https://veterinariandctr.netlify.app/",
      type: "front",
    },
    {
      title: "Textutils Converter",
      description: "ReactJs Project Text-converter.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/Text-Converter",
      demo: "https://textutils-converter.netlify.app/",
      type: "back",
    },
    {
      title: "Dice Game",
      description:
        "It is a basic ReactJs Dice Game to check your luck earn points and enjoy it with friends.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/Dice-Game",
      demo: "https://dicegamereactjs.netlify.app/",
      type: "back",
    },
    {
      title: "Contact App",
      description:
        "I've built this with the help of the javascript library ReactJs. It is CRUD based app that store user data.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/Contact-App",
      demo: "https://contactappreactjs.netlify.app/",
      type: "back",
    },
    {
      title: "Calculator",
      description:
        "I've built Portofino with the help of HTML, CSS, and Javascript.",
      imgUrl: cc,
      code: "https://github.com/HassanImtiaz3/CodSoft_Task3",
      demo: "https://hassanimtiaz3.github.io/CodSoft_Task3/",
      type: "back",
    },
  ];

    // Filter projects by type
    const frontEndProjects = projects.filter((project) => project.type === "front");
    const backEndProjects = projects.filter((project) => project.type === "back");
  

  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit dolorum explicabo eligendi magnam minus sed vel quae
                quod itaque neque hic odio unde quos, culpa odit aut provident
                obcaecati enim.
              </p>

              <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link  eventKey="first">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Front-End</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Back-End</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((projects, index) => {
                        return <ProjectCard key={index} {...projects} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                      <Row>
                      {frontEndProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                      </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <Row>
                      {backEndProjects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                      </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
