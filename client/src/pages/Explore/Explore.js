import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ArtistScroller from "../../components/ArtistScroller/ArtistScroller";
import useSWR from "swr";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const sortAndFilterArtistArray = (artists) => {
  if (!artists) return;

  const filteredArtists = artists.filter((artist) => artist.genres.length > 0);
  const sortedArtists = filteredArtists.sort(
    (a, b) => b.popularity - a.popularity
  );
  return sortedArtists;
};

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=album,track,artist&market=DE&limit=20`
  );

  searchResult && console.log(searchResult);

  const sortedArtists = sortAndFilterArtistArray(searchResult?.artists.items);

  return (
    <FlexContainer>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <p>Searchquery: {encodeURI(searchQuery)}</p>
      <ArtistScroller artists={sortedArtists} />
    </FlexContainer>
  );
};

export default Explore;
