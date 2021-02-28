import React from "react";
import ReactLoaderSpinner from "react-loader-spinner";
import classes from "./Loader.module.css";

const Loader = (props) => {
  const { height, width, visible, className } = props;

  return (
    <div className={`${classes.Loader} ${className}`}>
      <ReactLoaderSpinner
        type="Audio"
        color="#202020"
        height={height ? height : null}
        width={width ? width : null}
        visible={visible ? visible : true}
      />
    </div>
  );
};

export default Loader;
