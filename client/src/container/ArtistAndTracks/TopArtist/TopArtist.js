import React from "react";
import useSWR from "swr";
import Loader from "../../../components/Loader/Loader";
import ArtistAndTracks from "../ArtistAndTracks";

const TopArtist = ({ timeRange = "short_term" }) => {
  const { data: artistJSON } = useSWR(
    `/me/top/artists?time_range=${timeRange}&limit=1`
  );

  const artist = artistJSON && artistJSON.items[0];

  return (
    <>
      {artist ? (
        <ArtistAndTracks artist={artist} headline="Top Artist" />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtist;
