import React from "react";


const SkillsCarousel = (props) => {
  return (
    <>
      <div className="item">
        <img src={props.img} alt="Skills" />
        <h5>{props.tag}</h5>
      </div>
    </>
  );
};

export default SkillsCarousel;
