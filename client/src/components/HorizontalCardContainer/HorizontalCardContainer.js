import React from "react";
import styled from "styled-components/macro";

const CardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const CardList = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: var(--spacing-size-sm-2);
  padding-bottom: var(--spacing-size-sm-3);

  & li {
    list-style: none;
    text-shadow: 0px 2px 10px rgba(124, 97, 97, 0.3);
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

const HorizontalCardContainer = ({ children, className }) => {
  return (
    <CardContainer className={className}>
      <CardList>{children}</CardList>
    </CardContainer>
  );
};

export default HorizontalCardContainer;
