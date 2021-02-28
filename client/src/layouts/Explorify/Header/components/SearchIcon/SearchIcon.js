import React from "react";
import classes from "./SearchIcon.module.css";
import Icon from "../../../../../components/Icons/Icon/Icon";

const SearchIcon = () => {
  return (
    <div className={classes.SearchIconContainer}>
      <Icon type="icon-search" className={classes.SearchIcon} />
    </div>
  );
};

export default SearchIcon;
