import React from "react";
import ArtistAndTracks from "../../../ArtistAndTracks/ArtistAndTracks";
import CardSection from "../../../../components/CardSection/CardSection";
import styled from "styled-components/macro";

const sortArtistArray = (artists) => {
  if (!artists) return;

  // const filteredArtists = artists.filter((artist) => artist.genres.length > 0);
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
  gap: 3rem;
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
          headline="Top Result"
          nTracks={5}
        />
      )}
      {scrollerArtists && (
        <CardSection data={scrollerArtists} type={"artist"} title="artists" />
      )}
    </FlexContainer>
  );
}

export default ArtistResults;
