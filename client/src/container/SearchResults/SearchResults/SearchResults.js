import React from "react";
import ArtistResults from "./ArtistResults/ArtistResults";
import AlbumResults from "./AlbumResults/AlbumResults";
import TrackScroller from "../../../components/TrackScroller/TrackScroller";
import styled from "styled-components/macro";

const sortByPopularity = (items) => {
  if (!items) return;

  // const filteredItems = Items.filter((artist) => artist.genres.length > 0);
  const sortedItems = [...items].sort((a, b) => b.popularity - a.popularity);
  return sortedItems;
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function SearchResults({ results }) {
  const artists =
    results?.artists.items.length > 0 &&
    sortByPopularity(results.artists.items);

  const tracks =
    results?.tracks.items.length > 0 && sortByPopularity(results.tracks.items);

  const albums =
    results?.albums.items.length > 0 && sortByPopularity(results.albums.items);

  return (
    <FlexContainer>
      {artists ? <ArtistResults artists={artists} /> : null}
      {tracks ? <TrackScroller tracks={tracks} /> : null}
      {albums ? <AlbumResults albums={albums} /> : null}
    </FlexContainer>
  );
}

export default SearchResults;
