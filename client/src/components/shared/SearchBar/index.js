import React, { useEffect, useContext } from "react";
import Icon from "components/shared/Icon";
import styled from "styled-components/macro";
import { SearchContext } from "store/SearchContext";
import theme from "styles/theme";
import { useHistory, useLocation } from "react-router-dom";

const SearchInput = styled.input`
  height: 4rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  transition: all 0.2s;
  padding-left: var(--spacing-size-sm-3);
  padding-right: var(--spacing-size-lg-1);
  width: 100%;

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
  width: 150px;
  position: relative;
  transition: all 0.5s;

  &:focus-within {
    width: 200px;

    @media ${theme.bp.mobileM} {
      width: 170px;
    }
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0.9rem;
  right: 1rem;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-grey-2);
  }
`;

const SearchBar = ({ className }) => {
  let { setSearchQuery, searchQuery } = useContext(SearchContext);

  let history = useHistory(); //goes into the component
  let location = useLocation(); //goes into the component

  useEffect(() => {
    if (location.pathname !== "/explore") {
      setSearchQuery("");
    }
  }, [location, setSearchQuery]);

  const handleClick = () => {
    if (history.location.pathname !== "/discover") {
      history.push("/explore");
    }
  };

  return (
    <SearchForm
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
      className={className}
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
        spellCheck="false"
        onClick={handleClick}
      />
      <SearchIcon type="icon-search" />
    </SearchForm>
  );
};

export default SearchBar;
