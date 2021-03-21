import axios from "axios";
import { getAccessToken } from "../auth/auth";
import useSWR from "swr";

//------------------------------------------------
//---------> SETUP
//------------------------------------------------

//! Delete
const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};

//! Delete
const BASE_URI = `https://api.spotify.com/v1`;

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

export const getArtistsTopTracks = (id, country) =>
  axios.get(`${BASE_URI}/artists/${id}/top-tracks?market=${country}`, {
    headers,
  });

//-----------------------
// User Profile API
//-----------------------

export const getMe = () => axios.get(`${BASE_URI}/me`, { headers });

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

export const getUsersTopArtistsShort = (limit = 20) =>
  axios.get(`${BASE_URI}/me/top/artists?time_range=short_term&limit=${limit}`, {
    headers,
  });
