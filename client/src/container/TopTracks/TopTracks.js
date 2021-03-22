import React from "react";
import Loader from "../../components/Loader";
import TitleWrapper from "../../components/TitleWrapper";
import SongContainer from "../../components/SongContainer";
import useSWR from "swr";

function TopTracks({ timeRange = "short_term", limit = 15 }) {
  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=${timeRange}&limit=${limit}`
  );

  return (
    <>
      {topTracks ? (
        <TitleWrapper headline={"Your top tracks"} link={"/explore/top-tracks"}>
          <SongContainer tracks={topTracks.items} displayImage={true} />
        </TitleWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TopTracks;
