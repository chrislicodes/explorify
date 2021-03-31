import React from "react";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 25rem;
`;

const CardList = styled.ul`
  --column-size: 190px;
  display: grid;
  overflow-y: hidden;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(var(--column-size), 1fr));
  grid-gap: var(--spacing-size-sm-2);
  padding-bottom: var(--spacing-size-sm-3);

  & li {
    list-style: none;
    text-shadow: 0px 2px 10px rgba(124, 97, 97, 0.3);
    isolation: isolate;
    flex: 1;
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

const CardContainer = ({ children, className }) => {
  return (
    <FlexContainer className={className}>
      <CardList>{children}</CardList>
    </FlexContainer>
  );
};

export default CardContainer;
