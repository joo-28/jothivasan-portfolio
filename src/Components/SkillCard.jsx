import React from "react";
import "../Components/SkillCard.css";
const SkillCard = (props) => {
  return (
    <>
      <div className="card">
        <span className="tooltip">{props.skillName}</span>
        <span>
          <img src={props.skillImg} alt="" />
        </span>
      </div>
    </>
  );
};

export default SkillCard;
