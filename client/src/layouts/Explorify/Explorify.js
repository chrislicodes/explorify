import React from "react";
import classes from "./Explorify.module.css";

import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";

const Explorify = ({ children }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Explorify}>
        <SideNav />
        <div className={classes.Content}>
          <Header />
          <main className={classes.View}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Explorify;
