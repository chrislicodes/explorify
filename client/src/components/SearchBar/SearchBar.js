import React from "react";
import Icon from "../Icons/Icon/Icon";
import styled from "styled-components/macro";
import theme from "../../styles/theme";
import mixins from "../../styles/mixins";

const SearchForm = styled.form`
  position: relative;
  height: 100%;
`;

const SearchInput = styled.input`
  background: var(--color-grey-2);
  width: 0px;
  height: 100%;
  border: 0;
  border-radius: 20px;
  padding-left: var(--font-size-lg);

  transition: all 1s;

  &:focus {
    width: 40rem;
    background: var(--color-grey-6);
    border: 2px solid var(--color-spotify-green);
    padding-right: 4.2rem;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 4rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover svg {
    fill: var(--color-spotify-green);
  }

  & div {
    ${mixins.flexCenter}
    background-color: var(--color-grey-3);

    height: 100%;
    width: 100%;
    border-radius: 10rem;
  }

  & svg {
    fill: var(--color-white);
    width: 40%;
    height: 40%;
    transition: ${theme.transition};
  }

  &:focus + ${SearchInput} {
    width: 40rem;
    background: var(--color-grey-6);
    border: 2px solid var(--color-spotify-green);
    padding-right: 4.2rem;
  }
`;

const SearchIcon = () => {
  return (
    <>
      <SearchForm>
        <SearchButton type="button">
          <Icon type="icon-search" />
        </SearchButton>
        <SearchInput
          type="search"
          placeholder="Search for Songs, Artists, ..."
          required={true}
        />
      </SearchForm>
    </>
  );
};

export default SearchIcon;
