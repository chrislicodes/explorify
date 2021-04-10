import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const HeadlineContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 25rem;
  min-width: 100%;
  text-transform: uppercase;
  color: var(--color-white);
  gap: 2rem;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  min-width: 0;
`;

const HeadlineWrapper = styled.div`
  min-width: 0;
`;

const Headline = styled.h1`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 1.7px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const UnderLine = styled.div`
  width: 13rem;
  height: 0.4rem;
  background-color: var(--color-spotify-green);
`;

const ShowMoreLink = styled(Link)`
  font-size: 1.3rem;
  color: var(--color-spotify-green);
  transition: all 0.3s;
  flex-shrink: 0;

  &:hover {
    color: var(--color-spotify-logo-green);
  }
`;

const TitleWrapper = ({ children, headline, link }) => {
  return (
    <HeadlineContainer>
      <ContainerHeader>
        <HeadlineWrapper>
          <Headline>{headline}</Headline>
          <UnderLine />
        </HeadlineWrapper>
        <ShowMoreLink to={link}>Show more</ShowMoreLink>
      </ContainerHeader>
      {children}
    </HeadlineContainer>
  );
};

export default TitleWrapper;
