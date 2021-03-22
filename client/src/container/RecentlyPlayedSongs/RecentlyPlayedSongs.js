import React from "react";
import Loader from "../../components/Loader";
import TitleWrapper from "../../components/TitleWrapper";
import SongContainer from "../../components/SongContainer";
import useSWR from "swr";

function RecentlyPlayedSongs({ limit = 15 }) {
  const { data: recentlyPlayedSongsData } = useSWR(
    `/me/player/recently-played?limit=${limit}`
  );

  const recentlyPlayedSongs =
    recentlyPlayedSongsData &&
    recentlyPlayedSongsData.items.map((item) => item.track);

  return (
    <>
      {recentlyPlayedSongs ? (
        <TitleWrapper
          headline={"Recently played songs"}
          link={"/explore/recently-played"}
        >
          <SongContainer tracks={recentlyPlayedSongs} displayImage={true} />
        </TitleWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default RecentlyPlayedSongs;
