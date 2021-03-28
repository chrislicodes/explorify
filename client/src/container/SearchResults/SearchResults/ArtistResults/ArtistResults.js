import React from "react";
import ArtistAndTracks from "../../../ArtistAndTracks/ArtistAndTracks";

const sortArtistArray = (artists) => {
  if (!artists) return;

  // const filteredArtists = artists.filter((artist) => artist.genres.length > 0);
  const sortedArtists = artists.sort((a, b) => b.popularity - a.popularity);
  return sortedArtists;
};

const filterArtistArray = (artists) => {
  if (!artists) return;

  const filteredArtists = artists.filter((artist) => artist.genres.length > 0);
  return filteredArtists;
};

function ArtistResults({ artists }) {
  const sortedArtists = sortArtistArray(artists);

  return (
    <ArtistAndTracks artist={sortedArtists[0]} headline="Artist Top Result" />
  );
}

export default ArtistResults;
