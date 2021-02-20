import axios from "axios";

import { getHashParams } from "../utils/utils";

//------------------------------------------------
//---------> TOKENS
//------------------------------------------------

export const getAccessToken = () => {
  const accessToken = getHashParams().access_token;
  localStorage.setItem("access_token", accessToken);

  return accessToken;
};

//------------------------------------------------
//---------> API CALLS
//------------------------------------------------


export const getMyInfo = () => {
  return axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("spotify_access_token"),
    },

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  "Content-Type": "application/json",
};

export const getMe = () =>
  axios.get(`https://api.spotify.com/v1/me`, { headers });

export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
    headers,

  });

export const getMultipleRecentlyPlayed = async () => {
  let data = [];

  getRecentlyPlayed()
    .then((res) => {
      data.append(res.data);

      return axios.get(data.next, { headers });
    })
    .then((res) => data.append(res.data));

  return data;
};
