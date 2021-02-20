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
  });
};
