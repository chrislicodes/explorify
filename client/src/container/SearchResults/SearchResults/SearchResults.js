import React from "react";
import ArtistResults from "./ArtistResults/ArtistResults";
import AlbumResults from "./AlbumResults/AlbumResults";
import CardSection from "../../../components/CardSection/CardSection";
import styled from "styled-components/macro";
import NothingFound from "../NothingFound/NothingFound";
import theme from "../../../styles/theme";

const sortByPopularity = (items) => {
  if (!items) return;

  const sortedItems = [...items].sort((a, b) => b.popularity - a.popularity);
  return sortedItems;
};

const filterByPopularity = (items) => {
  if (!items) return;

  const filteredItems = [...items].filter((item) => item.popularity > 35);
  return filteredItems;
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;

  &::last-child {
    margin-bottom: 3rem;

    @media ${theme.bp.desktopXS} {
      margin-bottom: 100rem;
    }
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
    <FlexContainer>
      {!artists && !tracks && !albums && <NothingFound />}
      {artists?.length > 0 ? <ArtistResults artists={artists} /> : null}
      {tracks?.length > 0 ? (
        <CardSection data={tracks} type={"track"} title="Tracks" />
      ) : null}
      {albums?.length > 0 ? <AlbumResults albums={albums} /> : null}
    </FlexContainer>
  );
}

export default SearchResults;
