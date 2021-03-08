import React from "react";
import classes from "./HorizontalCardContainer.module.css";

const HorizontalCardContainer = ({ children, className }) => {
  return (
    <div className={`${classes.cardContainer} ${className}`}>
      <ul className={classes.cardList}>{children}</ul>
    </div>
  );
};

export default HorizontalCardContainer;
