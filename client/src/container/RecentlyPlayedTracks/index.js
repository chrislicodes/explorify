import React from "react";
import Loader from "components/shared/Loader";
import SectionTemplate from "components/templates/SectionTemplate";
import TrackContainer from "container/TrackWrapperTemplate";
import useSWR from "swr";

function RecentlyPlayedTracks({ limit = 10 }) {
  const { data: recentlyPlayedTracksData } = useSWR(
    `/me/player/recently-played?limit=${limit}`
  );

  const recentlyPlayedTracks =
    recentlyPlayedTracksData &&
    recentlyPlayedTracksData.items.map((item) => item.track);

  return (
    <>
      {recentlyPlayedTracks ? (
        <SectionTemplate
          headline={"Recently played songs"}
          link={"/explore/recently-played"}
        >
          <TrackContainer tracks={recentlyPlayedTracks} displayImage={true} />
        </SectionTemplate>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default RecentlyPlayedTracks;
