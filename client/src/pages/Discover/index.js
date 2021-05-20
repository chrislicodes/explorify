import React, { useState, useContext, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import PageTemplate from "components/templates/PageTemplate";
import SectionTemplate from "components/templates/SectionTemplate";
import TrackCardSection from "container/CardSections/TrackCardSection";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import TrackWrapperTemplate from "container/TrackWrapperTemplate";
import useSWR from "swr";
import SelectedCardItem from "components/items/SelectedCardItem";
import styled from "styled-components/macro";
import { axiosInstance } from "App";
import PlaylistForm from "./components/PlaylistForm";
import Loader from "components/shared/Loader";
import Collapsible from "./components/Collapsible";
import NothingFound from "components/shared/NothingFound";
import { SearchContext } from "store/SearchContext";
import { UserContext } from "store/UserContext";
import { getTrackData } from "container/CardSections/TrackCardSection";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";

const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-md-1);
`;

const StyledButton = styled(Button)`
  height: 4.5rem;
  flex-grow: 0;
  width: 16rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-size-sm-1);
  margin-top: var(--spacing-size-sm-2);
  margin-bottom: -2rem;
`;

const StyledIcon = styled(Icon)`
  min-height: 2rem;
  min-width: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  & svg {
    height: 100%;
    width: 100%;
    fill: var(--color-spotify-green);
  }
`;

function Discover() {
  const { searchQuery } = useContext(SearchContext);
  const { userData: user } = useContext(UserContext);

  const [selectedData, setSelectedData] = useState([]);
  const [sliderValues, setSliderValues] = useState({
    popularity: [0, 100],
    valence: [0, 100],
    energy: [0, 100],
    acousticness: [0, 100],
    danceability: [0, 100],
  });
  const [buttonText, setButtonText] = useState("Save to Spotify");
  const { addToast } = useToasts();

  const handleChange = (values, id) => {
    setSliderValues((prevValues) => {
      return {
        ...prevValues,
        [id]: values,
      };
    });
  };

  //should move to container
  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=short_term&limit=20`
  );

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      user &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=track&market=${user.country}&limit=10`
  );

  const filterSelectedTracks = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.filter(
      (track) => !selectedData.find((item) => item.id === track.id)
    );
  };

  const createRecommendationSearchParams = () =>
    new URLSearchParams({
      seed_tracks: selectedData.map((data) => data.id).join(","),
      min_popularity: sliderValues.popularity[0],
      max_popularity: sliderValues.popularity[1],
      min_valence: sliderValues.valence[0] / 100,
      max_valence: sliderValues.valence[1] / 100,
      min_energy: sliderValues.energy[0] / 100,
      max_energy: sliderValues.energy[1] / 100,
      min_acousticness: sliderValues.acousticness[0] / 100,
      max_acousticness: sliderValues.acousticness[1] / 100,
      min_danceability: sliderValues.danceability[0] / 100,
      max_danceability: sliderValues.danceability[1] / 100,
      market: user.country,
      limit: 50,
    });

  const { data: recommendation } = useSWR(
    () =>
      selectedData.length !== 0 &&
      user &&
      `/recommendations?${createRecommendationSearchParams()}`,
    { revalidateOnFocus: false }
  );

  const handleClick = (e, data) => {
    const findID = selectedData.findIndex((item) => {
      return item.id === data.id;
    });

    if (findID === -1) {
      if (selectedData.length < 5) {
        setSelectedData((prevData) => [...prevData, data]);
      } else {
        addToast("You already selected five tracks.", {
          appearance: "info",
          autoDismiss: true,
        });
      }
    } else {
      setSelectedData((prevData) => {
        return [...prevData].filter((el, index) => index !== findID);
      });
    }
  };

  const createPlaylist = async (e) => {
    e.preventDefault();
    const playlistName = "Explorify Playlist";

    try {
      setButtonText("Saving ..");
      const playlist = await axiosInstance.post(`/users/${user.id}/playlists`, {
        name: playlistName,
        description: `Created via Explorify App based on ${selectedData
          .map((item) => item.secondaryInfo + " - " + item.primaryInfo)
          .join(", ")}`,
        public: false,
      });

      const playlistID = playlist.data.id;

      await axiosInstance.post(`/playlists/${playlistID}/tracks`, {
        uris: recommendation.tracks.map((data) => data.uri),
      });
      setButtonText("Success!");
    } catch (error) {
      setButtonText("Error");
    } finally {
      setTimeout(() => setButtonText("Save to Spotify"), 2000);
    }
  };

  useEffect(() => {
    topTracks &&
      setSelectedData(
        [...topTracks.items]
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map((item) => getTrackData(item))
      );
  }, [topTracks]);

  return (
    <PageTemplate>
      <Info>
        <StyledIcon type="icon-notification" />
        <p>
          Generate a playlist by clicking on and selecting up to 5 tracks. You
          can also use the search bar to find more from your favorite artists.
        </p>
      </Info>
      <TrackCardSection
        data={
          searchQuery !== ""
            ? filterSelectedTracks(searchResult?.tracks.items)
            : filterSelectedTracks(topTracks?.items)
        }
        title={
          (searchQuery !== "" && "Search Results") || "Your Recent Top Tracks"
        }
        onCardItemClick={handleClick}
        iconType={(selectedData.length < 5 && "icon-plus") || "icon-lock"}
      />
      {selectedData.length > 0 && (
        <CardSectionTemplate
          overflowHidden={false}
          title="Selected Tracks (max. 5)"
          columnWidthMod={100}
          cards={selectedData.map((data, index) => (
            <li key={data.id + index}>
              <SelectedCardItem {...data} onClick={handleClick} />
            </li>
          ))}
        />
      )}
      {selectedData.length > 0 && (
        <>
          <Collapsible>
            <PlaylistForm
              sliderHandler={handleChange}
              sliderValues={sliderValues}
              buttonHandler={createPlaylist}
            />
          </Collapsible>
          <SectionTemplate headline="Your newly generated Playlist">
            <RecommendationWrapper>
              {(recommendation?.tracks.length > 0 && (
                <>
                  <StyledButton main={true} onClick={createPlaylist}>
                    {buttonText}
                  </StyledButton>

                  <TrackWrapperTemplate
                    tracks={recommendation.tracks}
                    displayImage={true}
                  />
                </>
              )) ||
                (recommendation?.tracks.length === 0 && <NothingFound />) || (
                  <Loader />
                )}
            </RecommendationWrapper>
          </SectionTemplate>
        </>
      )}
    </PageTemplate>
  );
}

export default Discover;
