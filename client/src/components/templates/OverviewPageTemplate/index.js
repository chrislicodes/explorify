import React from "react";
import styled from "styled-components/macro";
import PlaceholderImage from "components/shared/PlaceholderImage";
import theme from "styles/theme";

const FlexContainer = styled.article`
  max-width: 1600px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: var(--spacing-size-md-1);

  padding: 0 var(--spacing-size-lg-1);
  padding-bottom: var(--spacing-size-xl);

  gap: var(--spacing-size-lg-1);

  & > * {
    width: 100%;
  }

  @media ${theme.bp.tabletS} {
    padding: 0 var(--spacing-size-sm-3);
  }
`;

const OverviewHeader = styled.header`
  display: flex;
  gap: var(--spacing-size-lg-1);

  @media ${theme.bp.tabletS} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 30rem;

  & img {
    width: 100%;
    box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  }

  @media ${theme.bp.tabletS} {
    align-self: center;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: var(--spacing-size-sm-1);
  margin-top: var(--spacing-size-sm-1);
`;

const Title = styled.h1`
  font-size: var(--font-size-7);
  font-weight: 600;
  line-height: 1;
`;

const SecondaryInfo = styled.p`
  font-size: var(--font-size-6);
  & a {
    color: var(--color-spotify-green);

    &:hover {
      border-bottom: 1px solid var(--color-spotify-green);
    }
  }
`;

const AdditionalInfo = styled.p`
  font-size: var(--font-size-4);
  color: var(--color-grey-5);
`;

const PlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 4.5rem;
  margin-top: var(--spacing-size-sm-1);
  border-radius: 15rem;
  font-weight: 500;
  font-size: var(--font-size-3);
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
  gap: var(--spacing-size-lg-1);
`;

function OverviewPageTemplate({
  imageURL,
  title,
  secondaryInfo,
  additionalInfo,
  playLink,
  children,
  buttonLabel,
}) {
  return (
    <FlexContainer>
      <OverviewHeader>
        <ImageContainer>
          {imageURL ? <img src={imageURL} alt={title} /> : <PlaceholderImage />}
        </ImageContainer>
        <Description>
          <Title>{title}</Title>
          <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
          <AdditionalInfo>{additionalInfo}</AdditionalInfo>
          <PlayButton href={playLink} target="_blank" rel="noopener noreferrer">
            {buttonLabel}
          </PlayButton>
        </Description>
      </OverviewHeader>
      <OverviewContent>{children}</OverviewContent>
    </FlexContainer>
  );
}

export default OverviewPageTemplate;
