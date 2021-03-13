import React from "react";
import classes from "./Explorify.module.css";

import SideNav from "./SideNav";
import Header from "./Header";

const Explorify = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.explorify}>
        <SideNav className={classes.sideNav} titleClass={classes.navTitle} />
        <div className={classes.content}>
          <Header />
          <main className={classes.view}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Explorify;
