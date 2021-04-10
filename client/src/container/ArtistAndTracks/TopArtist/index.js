import React from "react";
import useSWR from "swr";
import Loader from "../../../components/Loader";
import ArtistAndTracks from "..";

const TopArtist = ({ timeRange = "short_term" }) => {
  const { data: artistJSON } = useSWR(
    `/me/top/artists?time_range=${timeRange}&limit=1`
  );

  const artist = artistJSON && artistJSON.items[0];

  return (
    <>
      {artist ? (
        <ArtistAndTracks
          artist={artist}
          headline="Top Artist"
          link="/top-artists"
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtist;
