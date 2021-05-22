import { axiosInstance } from "App";

export const createRecommendationSearchParams = (
  selectedData,
  sliderValues,
  user
) =>
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

export const filterSelectedTracks = (arr, selectedData) => {
  if (!Array.isArray(arr)) return arr;
  return arr.filter(
    (track) => !selectedData.find((item) => item.id === track.id)
  );
};

// Playlist Functions

const createPlaylist = async (
  user,
  description = "test",
  playlistName = "Explorify Playlist"
) => {
  try {
    const playlist = await axiosInstance.post(`/users/${user.id}/playlists`, {
      name: playlistName,
      description: description,
      public: false,
    });

    return playlist.data.id;
  } catch (error) {
    throw error;
  }
};

const generatePlaylistDescription = (trackItems) => {
  return `Created via Explorify App based on ${trackItems
    .map((item) => item.secondaryInfo + " - " + item.primaryInfo)
    .join(", ")}`;
};

const populateTracksToPlaylist = async (playlistID, trackURIs) => {
  try {
    await axiosInstance.post(`/playlists/${playlistID}/tracks`, {
      uris: trackURIs,
    });
  } catch (error) {
    throw error;
  }
};

const getTrackURIs = (trackItems) => {
  return trackItems.map((item) => item.uri);
};

export const savePlaylist = async (
  e,
  user,
  recommendationTracks,
  selectedTracks
) => {
  e.preventDefault();
  try {
    const playlistID = await createPlaylist(
      user,
      generatePlaylistDescription(selectedTracks)
    );

    await populateTracksToPlaylist(
      playlistID,
      getTrackURIs(recommendationTracks)
    );

    return true;
  } catch (error) {
    throw error;
  }
};
