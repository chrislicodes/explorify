import React from "react";
import classes from "./HorizontalCardContainer.module.css";

const HorizontalCardContainer = ({ cardItems, className }) => {
  return (
    <div className={`${classes.cardContainer} ${className}`}>
      <ul className={classes.cardList}>{cardItems}</ul>
    </div>
  );
};

export default HorizontalCardContainer;
