import React from "react";
import ArtistAndTracks from "container/ArtistAndTracks";
import ArtistCardSection from "container/CardSections/ArtistCardSection";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-lg-1);
`;

function ArtistResults({ artists }) {
  const scrollerArtists = artists.slice(1).length > 0 && artists.slice(1);

  return (
    <FlexContainer>
      {artists.length > 0 && (
        <ArtistAndTracks
          artist={artists[0]}
          nTracks={5}
          headline={artists[0].name}
        />
      )}
      {scrollerArtists && (
        <ArtistCardSection
          data={scrollerArtists}
          type={"artist"}
          title="artists"
        />
      )}
    </FlexContainer>
  );
}

export default ArtistResults;
