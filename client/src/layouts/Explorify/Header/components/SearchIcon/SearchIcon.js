import React from "react";
import classes from "./SearchIcon.module.css";
import Icon from "../../../../../components/Icons/Icon/Icon";

const SearchIcon = () => {
  return (
    <>
      <form className={classes.searchForm}>
        <button type="button" className={classes.button}>
          <Icon type="icon-search" className={classes.searchIcon} />
        </button>
        <input
          type="search"
          placeholder="Search for Songs, Artists, ..."
          className={classes.searchBar}
          required="true"
        />
      </form>
    </>
  );
};

export default SearchIcon;
