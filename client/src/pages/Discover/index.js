import React, { useState, useRef } from "react";
import PageTemplate from "components/templates/PageTemplate";
import SectionTemplate from "components/templates/SectionTemplate";
import DiscoverSearchBar from "./components/DiscoverSearchBar";
import TrackCardSection from "container/CardSections/TrackCardSection";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import TrackWrapperTemplate from "container/TrackWrapperTemplate";
import useSWR from "swr";
import CardItem from "components/items/CardItem";
import styled from "styled-components/macro";
import { axiosInstance } from "App";

const FlexContainer = styled.div`
  display: flex;
`;

function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  const inputEl = useRef(null);

  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=short_term&limit=10`
  );

  const { data: user } = useSWR("/me");

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      user &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=track&market=${user.country}&limit=10`
  );

  const { data: recommendation } = useSWR(
    () =>
      selectedData.length !== 0 &&
      user &&
      `/recommendations?seed_tracks=${selectedData
        .map((data) => data.id)
        .join(",")}&seed_artists=&seed_genres=&market=${user.country}&limit=30`,
    { revalidateOnFocus: false }
  );

  const handleClick = (e, data) => {
    const findID = selectedData.findIndex((item) => {
      return item.id === data.id;
    });

    if (findID === -1) {
      selectedData.length < 5 &&
        setSelectedData((prevData) => [...prevData, data]);
    } else {
      setSelectedData((prevData) => {
        let newData = [...prevData];
        newData.splice(findID, 1);
        return newData;
      });
    }
  };

  const createPlaylist = async (e) => {
    e.preventDefault();
    const playlistName =
      inputEl.current.value !== ""
        ? inputEl.current.value
        : "Explorify Playlist";

    try {
      const playlist = await axiosInstance.post(`/users/${user.id}/playlists`, {
        name: playlistName,
        description: "Created via Explorify App",
        public: false,
      });

      const playlistID = playlist.data.id;

      await axiosInstance.post(`/playlists/${playlistID}/tracks`, {
        uris: recommendation.tracks.map((data) => data.uri),
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectedData, recommendation);

  return (
    <PageTemplate>
      <SectionTemplate headline="Combine your favorite tracks to discover new music">
        <DiscoverSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <TrackCardSection
          data={
            searchQuery !== "" ? searchResult?.tracks.items : topTracks?.items
          }
          title={(searchQuery !== "" && "Results") || "Your Recent Top Songs"}
          onCardItemClick={handleClick}
        />
        {selectedData.length > 0 && (
          <CardSectionTemplate
            overflowHidden={false}
            title="Selected Songs (max. 5)"
          >
            {selectedData.map((data, index) => (
              <li key={data.id + index}>
                <CardItem {...data} onClick={handleClick} />
              </li>
            ))}
          </CardSectionTemplate>
        )}
      </SectionTemplate>
      {selectedData.length > 0 && (
        <SectionTemplate headline="Your new Playlist">
          {recommendation && (
            <FlexContainer>
              <TrackWrapperTemplate
                tracks={recommendation.tracks}
                displayImage={true}
              />
              <form>
                <input type="text" ref={inputEl} placeholder="Playlist Name" />
                <button onClick={createPlaylist}>Create Playlist</button>
              </form>
            </FlexContainer>
          )}
        </SectionTemplate>
      )}
    </PageTemplate>
  );
}

export default Discover;
