import React from "react";
import styled from "styled-components/macro";

const FlexContainer = styled.article`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 3rem;
  padding-bottom: 5rem;
  gap: var(--spacing-size-lg);

  & > * {
    width: 100%;
  }
`;

const OverviewHeader = styled.header`
  display: flex;
  gap: 3rem;
`;

const ImageContainer = styled.div`
  width: 30rem;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

  & img {
    width: 100%;
  }
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: 1rem;
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: var(--font-size-xxxxl);
  font-weight: 600;
  line-height: 1;
`;

const SecondaryInfo = styled.p`
  font-size: var(--font-size-xxl);
  & a {
    color: var(--color-spotify-green);

    &:hover {
      border-bottom: 1px solid var(--color-spotify-green);
    }
  }
`;

const AdditionalInfo = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-grey-5);
`;

const PlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 4.5rem;
  margin-top: 1rem;
  border-radius: 15rem;
  font-weight: 500;
  font-size: var(--font-size-md-2);
  user-select: none;
  cursor: pointer;
  background-color: var(--color-spotify-green);
  transition: all 0.1s ease-in;

  &:hover {
    background-color: var(--color-spotify-logo-green);
  }
`;

const OverviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-lg);
`;

function OverviewPageTemplate({
  imageURL,
  title,
  secondaryInfo,
  additionalInfo,
  playLink,
  children,
}) {
  return (
    <FlexContainer>
      <OverviewHeader>
        <ImageContainer>
          <img src={imageURL} alt={title} />
        </ImageContainer>
        <Description>
          <Title>{title}</Title>
          <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
          <AdditionalInfo>{additionalInfo}</AdditionalInfo>
          <PlayButton href={playLink} target="_blank" rel="noopener noreferrer">
            Play on Spotify
          </PlayButton>
        </Description>
      </OverviewHeader>
      <OverviewContent>{children}</OverviewContent>
    </FlexContainer>
  );
}

export default OverviewPageTemplate;
