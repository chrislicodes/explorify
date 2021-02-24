import React from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";

const Home = () => {
  return (
    <div className={classes.gridParent}>
      <div className={classes.gridHeader}>
        <WelcomeUser />
      </div>
      <div className={classes.topLeft}></div>
      <div className={classes.topRight}></div>
      <div className={classes.middleLeft}></div>
      <div className={classes.middleRight}></div>
      <div className={classes.bottomLeft}></div>
      <div className={classes.bottomRight}></div>
    </div>
  );
};

export default Home;
