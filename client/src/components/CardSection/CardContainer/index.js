import React from "react";
import styled from "styled-components/macro";

import theme from "../../../styles/theme";

const CardList = styled.ul`
  --column-size: 180px;
  display: grid;
  overflow: hidden;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--column-size), 1fr));
  column-gap: var(--spacing-size-md-2);

  @media ${theme.bp.desktopXS} {
    --column-size: 160px;
  }

  @media ${theme.bp.tabletL} {
    --column-size: 150px;
  }

  @media ${theme.bp.mobileL} {
    --column-size: 120px;
  }

  @media ${theme.bp.mobileS} {
    --column-size: 100px;
  }

  & li {
    list-style: none;
    text-shadow: 0px 2px 10px rgba(124, 97, 97, 0.3);
    isolation: isolate;
    flex: 1;
    width: 100%;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--color-grey-3);
  }

  &::-webkit-scrollbar {
    height: 1rem;
    border-radius: 1rem;
    background-color: var(--color-grey-6);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-6);
  }
`;

const CardContainer = ({ children }) => {
  return <CardList>{children}</CardList>;
};

export default CardContainer;
