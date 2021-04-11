import React from "react";
import ArtistResults from "./ArtistResults";
import AlbumResults from "./AlbumResults";
import CardSection from "container/CardSection";
import styled from "styled-components/macro";
import NothingFound from "../NothingFound";

const sortByPopularity = (items) => {
  if (!items) return;

  const sortedItems = [...items].sort((a, b) => b.popularity - a.popularity);
  return sortedItems;
};

const filterByPopularity = (items) => {
  if (!items) return;

  const filteredItems = [...items].filter((item) => item.popularity > 15);
  return filteredItems;
};

const GridContainer = styled.div`
  display: grid;
  grid-gap: 2.4rem;

  & > * {
    min-width: 0;
  }
`;

function SearchResults({ results }) {
  const artists =
    results?.artists.items.length > 0 &&
    filterByPopularity(sortByPopularity(results.artists.items));

  const tracks =
    results?.tracks.items.length > 0 &&
    filterByPopularity(sortByPopularity(results.tracks.items));

  const albums =
    results?.albums.items.length > 0 && sortByPopularity(results.albums.items);

  return (
    <GridContainer>
      {!artists && !tracks && !albums && <NothingFound />}
      {artists?.length > 0 ? <ArtistResults artists={artists} /> : null}
      {tracks?.length > 0 ? (
        <CardSection data={tracks} type={"track"} title="Tracks" />
      ) : null}
      {albums?.length > 0 ? <AlbumResults albums={albums} /> : null}
    </GridContainer>
  );
}

export default SearchResults;
