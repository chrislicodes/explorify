import React from "react";
import Icon from "../Icons/Icon/Icon";
import styled from "styled-components/macro";

const SearchInput = styled.input`
  height: 3.5rem;
  width: 30rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  transition: all 0.2s;
  padding-left: 1.5rem;

  &:active,
  &:focus {
    border: 2px solid var(--color-spotify-green);
    outline: none;
  }
`;

const ScreenReaderLabel = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0.65rem;
  right: 1rem;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-grey-2);
  }
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchForm
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
      <SearchInput
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search"
        name="s"
        spellcheck="false"
        autoFocus
      />
      <SearchIcon type="icon-search" />
    </SearchForm>
  );
};

export default SearchBar;
