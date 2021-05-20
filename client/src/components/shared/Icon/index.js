import React from "react";
import sprite from "assets/sprites.svg";

const Icon = ({ className, type, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg>
        <use href={`${sprite}#${type}`}></use>
      </svg>
    </div>
  );
};

export default Icon;
