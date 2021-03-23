import React from "react";
import Icon from "../Icons/Icon/Icon";
import styled from "styled-components/macro";

const ScreenReaderLabel = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <form
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="header-search">
        <ScreenReaderLabel>
          Search for your favorite tracks, aritsts, ...
        </ScreenReaderLabel>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search for your favorite tracks, aritsts, ..."
        name="s"
      />
    </form>
  );
};

export default SearchBar;
