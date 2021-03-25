import React from "react";
import ArtistResults from "./ArtistResults/ArtistResults";
import TrackResults from "./TrackResults/TrackResults";
import AlbumResults from "./AlbumResults/AlbumResults";
import styled from "styled-components/macro";

const GridContainer = styled.div``;

function SearchResults({ results }) {
  const artists = results?.artists.items.length > 0 && results.artists.items;
  const tracks = results?.tracks.items.length > 0 && results.tracks.items;
  const albums = results?.albums.items.length > 0 && results.albums.items;

  return (
    <GridContainer>
      {artists ? <ArtistResults artists={artists} /> : null}
      {tracks ? <TrackResults tracks={tracks} /> : null}
      {albums ? <AlbumResults albums={albums} /> : null}
    </GridContainer>
  );
}

export default SearchResults;
