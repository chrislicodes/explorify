import React from "react";
import styled, { css } from "styled-components/macro";
import theme from "styles/theme";
import SectionTemplate from "components/templates/SectionTemplate";
import Loader from "components/shared/Loader";
import NothingFound from "components/shared/NothingFound";

const CardList = styled.ul`
  --column-size: ${({ backgroundHidden, columnWidthMod }) => {
    const width = (backgroundHidden ? 200 : 160) + columnWidthMod;
    return `${width}px`;
  }};

  display: grid;
  grid-auto-rows: ${({ overflowHidden }) => (overflowHidden ? 0 : 1)};
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--column-size), 1fr));
  column-gap: var(--spacing-size-md-1);

  padding: 0 var(--spacing-size-sm-1);

  overflow: ${({ overflowHidden }) => (overflowHidden ? "hidden" : "unset")};

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
    height: 0.6rem;
    border-radius: 1rem;
    background-color: var(--color-grey-6);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-6);
  }

  @media ${theme.bp.desktopS} {
    --column-size: ${(props) => {
      const width = 140 + props.columnWidthMod;
      return `${width}px`;
    }};

    ${({ overflowHidden }) => {
      if (overflowHidden) {
        return css`
          padding-bottom: var(--spacing-size-sm-1);
          grid-auto-flow: column;
          grid-auto-columns: minmax(var(--column-size), 1fr);
          overflow-x: scroll;
        `;
      }
    }};
  }

  @media ${theme.bp.tabletL} {
    --column-size: ${(props) => {
      const width = 130 + props.columnWidthMod;
      return `${width}px`;
    }};
  }

  @media ${theme.bp.mobileL} {
    --column-size: ${(props) => {
      const width = 120 + props.columnWidthMod;
      return `${width}px`;
    }};
  }

  @media ${theme.bp.mobileS} {
    --column-size: ${(props) => {
      const width = 110 + props.columnWidthMod;
      return `${width}px`;
    }};
  }
`;

const CardSectionTemplate = ({
  overflowHidden = true,
  backgroundHidden = false,
  columnWidthMod = 0,
  link,
  title,
  className,
  cards,
}) => {
  let renderData;

  if (Array.isArray(cards)) {
    renderData = (cards.length > 0 && cards) || <NothingFound />;
  } else {
    renderData = <Loader />;
  }
  
  return (
    <SectionTemplate
      headline={title || "Section"}
      link={link}
      className={className}
    >
      <CardList
        overflowHidden={overflowHidden}
        backgroundHidden={backgroundHidden}
        columnWidthMod={columnWidthMod}
      >
        {renderData}
      </CardList>
    </SectionTemplate>
  );
};

export default CardSectionTemplate;
