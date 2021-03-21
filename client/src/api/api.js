import axios from "axios";
import { getAccessToken } from "../auth/auth";
import useSWR from "swr";

//------------------------------------------------
//---------> SETUP
//------------------------------------------------

const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "application/json",
  },
});

const fetcher = (endpointURL) =>
  axiosInstance.get(endpointURL).then((res) => res.data);

//-----------------------
// FUNCTION CREATOR
//-----------------------

const createSWRHook = function ({ name, args, endpointURL }) {
  return (...args) => {
    const { data, error } = useSWR();
  };
};

//-----------------------
// Artist API
//-----------------------

export const useArtistsTopTrack = (id, country) => {
  const { data, error } = useSWR(
    () => id && country && `/artists/${id}/top-tracks?market=${country}`,
    fetcher
  );

  return {
    artistTopTracks: data,
    artistTopTracksIsLoading: !error && !data,
    artistTopTracksIsError: error,
  };
};

//-----------------------
// User Profile API
//-----------------------

export const getMe = () => axiosInstance.get(`/me`);

//-----------------------
// Player API
//-----------------------

export const useRecentlyPlayedSongs = (limit = 50) => {
  const { data, error } = useSWR(
    `/me/player/recently-played?limit=${limit}`,
    fetcher
  );

  return {
    recentlyPlayedSongs: data,
    recentlyPlayedSongsIsLoading: !error && !data,
    recentlyPlayedSongsIsError: error,
  };
};

//-----------------------
// Personalization API
//-----------------------

export const useUserTopArtistsShort = (limit = 20) => {
  const { data, error } = useSWR(
    `/me/top/artists?time_range=short_term&limit=${limit}`,
    fetcher
  );

  return {
    usersTopArtistsShort: data,
    usersTopArtistsShortIsLoading: !error && !data,
    usersTopArtistsShortIsError: error,
  };
};

export const useUserTopTracksShort = (limit = 20) => {
  const { data, error } = useSWR(
    `/me/top/tracks?time_range=short_term&limit=${limit}`,
    fetcher
  );

  return {
    usersTopTracksShort: data,
    usersTopTracksShortIsLoading: !error && !data,
    usersTopTracksShortIsError: error,
  };
};

//-----------------------
// Track API
//-----------------------

export const useTrackInformation = (id) => {
  const { data, error } = useSWR(() => id && `/tracks/${id}`, fetcher);

  return {
    trackInformation: data,
    trackInformationIsLoading: !error && !data,
    trackInformationIsError: error,
  };
};

export const useTrackAudioFeatures = (id) => {
  const { data, error } = useSWR(() => id && `/audio-features/${id}`, fetcher);

  return {
    trackAudioFeatures: data,
    trackAudioFeaturesIsLoading: !error && !data,
    trackAudioFeaturesIsError: error,
  };
};
