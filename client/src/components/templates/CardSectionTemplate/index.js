import React from "react";
import styled, { css } from "styled-components/macro";
import theme from "styles/theme";
import SectionTemplate from "components/templates/SectionTemplate";
import Loader from "components/shared/Loader";

const CardList = styled.ul`
  --column-size: ${(props) => {
    const width = (props.backgroundHidden ? 200 : 160) + props.columnWidthMod;
    return `${width}px`;
  }};
  display: grid;
  overflow: ${(props) => (props.overflowHidden ? "hidden" : "unset")};
  grid-auto-rows: ${(props) => (props.overflowHidden ? 0 : 1)};
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--column-size), 1fr));
  column-gap: var(--spacing-size-md-2);

  padding: 0 1rem;

  @media ${theme.bp.desktopS} {
    --column-size: ${(props) => {
      const width = 140 + props.columnWidthMod;
      return `${width}px`;
    }};
  }

  @media ${theme.bp.tabletL} {
    --column-size: ${(props) => {
      const width = 130 + props.columnWidthMod;
      return `${width}px`;
    }};

    ${({ overflowHidden }) => {
      if (overflowHidden) {
        return css`
          grid-auto-flow: column;
          grid-auto-columns: minmax(var(--column-size), 1fr);
          overflow-x: scroll;
        `;
      }
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

  & li {
    list-style: none;
    text-shadow: 0px 2px 10px rgba(124, 97, 97, 0.3);
    isolation: isolate;
    flex: 1;
    width: 100%;
  }

  /* -ms-overflow-style: none; /* IE and Edge 
  scrollbar-width: none; Firefox */

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--color-grey-3);
  }

  &::-webkit-scrollbar {
    /* display: none; */
    height: 0.6rem;
    border-radius: 1rem;
    background-color: var(--color-grey-6);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-6);
  }
`;

const CardSectionTemplate = ({
  overflowHidden = true,
  backgroundHidden = false,
  columnWidthMod = 0,
  children,
  link,
  title,
  className,
}) => {
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
        {children?.length > 0 ? children : <Loader />}
      </CardList>
    </SectionTemplate>
  );
};

export default CardSectionTemplate;
