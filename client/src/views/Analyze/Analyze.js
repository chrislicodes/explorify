import React from "react";
import Loader from "../../components/Loader/Loader";
import { useRecentlyPlayedSongs } from "../../api";
import TitleWrapper from "../../components/TitleWrapper";
import SongContainer from "../../components/SongContainer";

const Analyze = () => {
  const {
    recentlyPlayedSongs,
    recentlyPlayedSongsIsLoading,
    recentlyPlayedSongsIsError,
  } = useRecentlyPlayedSongs();
  return (
    <div>
      {recentlyPlayedSongs ? (
        <TitleWrapper
          headline={"Recently played songs"}
          link={"/analyze/recently-played"}
        >
          <SongContainer
            tracks={recentlyPlayedSongs.items
              .map((item) => item.track)
              .slice(0, 10)}
            displayImage={true}
          />
        </TitleWrapper>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Analyze;
