import React from "react";
import classes from "./Explorify.module.css";

import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";

const Explorify = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.explorify}>
        <SideNav className={classes.sideNav} />
        <div className={classes.content}>
          <Header />
          <main className={classes.view}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Explorify;
