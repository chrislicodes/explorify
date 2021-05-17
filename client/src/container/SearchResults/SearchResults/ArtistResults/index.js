import React from "react";
import ArtistAndTracks from "container/ArtistAndTracks";
import ArtistCardSection from "container/CardSections/ArtistCardSection";
import styled from "styled-components/macro";

const sortArtistArray = (artists) => {
  if (!artists) return;

  const sortedArtists = artists.sort((a, b) => b.popularity - a.popularity);
  return sortedArtists;
};

const filterArtistArray = (artists) => {
  if (!artists) return;

  const filteredArtists = artists.filter((artist) => artist.popularity > 25);
  return filteredArtists;
};

const sortAndFilterArtistArray = (artists) => {
  if (!artists) return;

  return sortArtistArray(filterArtistArray(artists));
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-lg-1);
`;

function ArtistResults({ artists }) {
  const sortedArtists = sortAndFilterArtistArray(artists);
  const scrollerArtists =
    sortedArtists.slice(1).length > 0 && sortedArtists.slice(1);

  return (
    <FlexContainer>
      {sortedArtists.length > 0 && (
        <ArtistAndTracks
          artist={sortedArtists[0]}
          nTracks={5}
          headline={sortedArtists[0].name}
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
