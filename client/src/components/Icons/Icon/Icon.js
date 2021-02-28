import React from "react";
import sprite from "../../../assets/sprites.svg";

const Icon = ({ className, type }) => {
  return (
    <div className={className}>
      <svg>
        <use href={`${sprite}#${type}`}></use>
      </svg>
    </div>
  );
};

export default Icon;
