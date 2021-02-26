import React from "react";
import Loader from "../Loader/Loader";
import classes from "./LoaderScreen.module.css";

const LoaderScreen = () => {
  return (
    <div className={classes["loaderscreen-container"]}>
      <Loader />
    </div>
  );
};

export default LoaderScreen;
