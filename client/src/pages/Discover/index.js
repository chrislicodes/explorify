import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/macro";
import useSWR from "swr";
import { useToasts } from "react-toast-notifications";

import SelectedCardItem from "components/items/SelectedCardItem";
import PageTemplate from "components/templates/PageTemplate";
import SectionTemplate from "components/templates/SectionTemplate";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import Button from "components/shared/Button";
import Loader from "components/shared/Loader";
import Icon from "components/shared/Icon";
import PlaylistForm from "./components/PlaylistForm";
import Collapsible from "./components/Collapsible";
import NothingFound from "components/shared/NothingFound";

import TrackCardSection, {
  getTrackData,
} from "container/CardSections/TrackCardSection";
import TrackWrapperTemplate from "container/TrackWrapperTemplate";

import { SearchContext } from "store/SearchContext";
import { UserContext } from "store/UserContext";

import {
  createRecommendationSearchParams,
  filterSelectedTracks,
  savePlaylist,
} from "./utils";

//-----------------------------------------
// Styles
//-----------------------------------------

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
  //-----------------------------------------
  // Hooks
  //-----------------------------------------
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

  //-----------------------------------------
  // Data Fetching
  //-----------------------------------------

  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=short_term&limit=20`
  );

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      user &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=track&market=${user.country}&limit=15`
  );

  const { data: recommendation } = useSWR(
    () =>
      selectedData.length !== 0 &&
      user &&
      `/recommendations?${createRecommendationSearchParams(
        selectedData,
        sliderValues,
        user
      )}`,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    //pseudo randomly prefill the selected data
    topTracks &&
      setSelectedData(
        [...topTracks.items]
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map((item) => getTrackData(item))
      );
  }, [topTracks]);

  //-----------------------------------------
  // Functions
  //-----------------------------------------

  const handleSliderChange = (values, id) => {
    setSliderValues((prevValues) => {
      return {
        ...prevValues,
        [id]: values,
      };
    });
  };

  const handleCardClick = (e, data) => {
    //check if item is selected
    const findID = selectedData.findIndex((item) => {
      return item.id === data.id;
    });

    if (findID === -1) {
      //if not and there are less than five, add the item
      if (selectedData.length < 5) {
        setSelectedData((prevData) => [...prevData, data]);
      } else {
        //if not and there are five show the info toast
        addToast("You already selected five tracks.", {
          appearance: "info",
          autoDismiss: true,
        });
      }
    } else {
      //if selected remove the clicked item
      setSelectedData((prevData) => {
        return [...prevData].filter((el, index) => index !== findID);
      });
    }
  };

  const createPlaylist = async (e) => {
    try {
      setButtonText("Saving ..");
      await savePlaylist(e, user, recommendation.tracks, selectedData);
      addToast("Playlist successfully saved. :)", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast("Something went wrong. :(", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setButtonText("Save to Spotify");
    }
  };
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
            ? filterSelectedTracks(searchResult?.tracks.items, selectedData)
            : filterSelectedTracks(topTracks?.items, selectedData)
        }
        title={
          (searchQuery !== "" && "Search Results") || "Your Recent Top Tracks"
        }
        onCardItemClick={handleCardClick}
        iconType={(selectedData.length < 5 && "icon-plus") || "icon-lock"}
      />
      {selectedData.length > 0 && (
        <CardSectionTemplate
          overflowHidden={false}
          title="Selected Tracks (max. 5)"
          columnWidthMod={100}
          cards={selectedData.map((data, index) => (
            <li key={data.id + index}>
              <SelectedCardItem {...data} onClick={handleCardClick} />
            </li>
          ))}
        />
      )}
      {selectedData.length > 0 && (
        <>
          <Collapsible>
            <PlaylistForm
              sliderHandler={handleSliderChange}
              sliderValues={sliderValues}
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
