import React from "react";
import ReactLoaderSpinner from "react-loader-spinner";

const Loader = (props) => {
  const { height, width, visible } = props;

  return (
    <ReactLoaderSpinner
      type="Audio"
      color="#202020"
      height={height ? height : null}
      width={width ? width : null}
      visible={visible ? visible : true}
    />
  );
};

export default Loader;
