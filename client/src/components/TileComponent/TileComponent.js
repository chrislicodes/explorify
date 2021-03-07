import React from "react";
import { Link } from "react-router-dom";
import classes from "./TileComponent.module.css";

const TileComponent = ({ children, headline, link }) => {
  return (
    <div className={classes.tileComponent}>
      <div className={classes.headline}>
        <h2>{headline}</h2>
        <Link to={link}>See more</Link>
      </div>
      {children}
    </div>
  );
};

export default TileComponent;
