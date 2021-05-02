import React from "react";
import Icon from "components/shared/Icon";
import styled from "styled-components/macro";

const SearchInput = styled.input`
  height: 4rem;
  border: none;
  border-bottom: 2px solid var(--color-grey-4);
  transition: all 0.2s;
  padding-left: 1.5rem;
  padding-right: 3.2rem;
  width: 100%;

  background: none;

  transition: all 0.5s;

  color: var(--color-white);
  font-size: 2rem;

  &:active,
  &:focus {
    border-bottom: 2px solid var(--color-spotify-green);
    outline: none;
  }

  &::placeholder {
    color: var(--color-white);
    font-size: 2rem;
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
  width: 100%;
  position: relative;
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0.9rem;
  right: 1rem;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-grey-6);
  }
`;

const DiscoverSearchBar = ({ className, searchQuery, setSearchQuery }) => {
  return (
    <SearchForm
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className={className}
    >
      <label htmlFor="discover-search">
        <ScreenReaderLabel>
          Search for your favorite tracks, aritsts, ...
        </ScreenReaderLabel>
      </label>
      <SearchInput
        value={searchQuery}
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        type="text"
        id="discover-search"
        placeholder="Search by Track"
        name="s"
        spellCheck="false"
      />
      <SearchIcon type="icon-search" />
    </SearchForm>
  );
};

export default DiscoverSearchBar;
