import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, code, demo }) => {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="btnGroup">
              <button className="projectBtn"><a href={code} target="_blank">Code</a></button>
              <button className="projectBtn"><a href={demo} target="_blank">Demo</a></button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProjectCard;
