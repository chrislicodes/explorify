import React from "react";
import sprite from "../../../assets/sprites.svg";

const Icon = (props) => {
  return (
    <div className={props.className}>
      <svg>
        <use href={`${sprite}#${props.type}`}></use>
      </svg>
    </div>
  );
};

export default Icon;
