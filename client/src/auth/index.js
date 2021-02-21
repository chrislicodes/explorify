import axios from "axios";
import { getHashParams } from "../utils/utils";

//------------------------------------------------
//---------> TOKENS
//------------------------------------------------

//SET Methods for Localstorage Keys
const setLocalTokenExpiresIn = () =>
  localStorage.setItem("spotify_expires_in", getHashParams().expires_in);

const setLocalTokenTimestamp = () =>
  localStorage.setItem("spotify_token_timestamp", Date.now());

const setLocalAccessToken = () => {
  setLocalTokenTimestamp();
  localStorage.setItem("spotify_access_token", getHashParams().access_token);
};

const setLocalRefreshToken = () =>
  localStorage.setItem("spotify_refresh_token", getHashParams().refresh_token);

//GET Methods for Localstorage Keys
const getLocalTokenExpiresIn = () => localStorage.getItem("spotify_expires_in");
const getLocalTokenTimestamp = () =>
  localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () => localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () =>
  localStorage.getItem("spotify_refresh_token");

const refreshAccessToken = () => {
  axios
    .get(
      `http://localhost:8080/refresh-token?refresh_token=${getLocalRefreshToken()}`
    )
    .then(({ data }) => {
      const { access_token } = data;
      setLocalAccessToken(access_token);
      return;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAccessToken = () => {
  const { error, access_token, refresh_token, expires_in } = getHashParams();

  if (error) {
    refreshAccessToken();
  }

  const localTokenExpiresIn = getLocalTokenExpiresIn();
  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  //If no expires_in is in localstoragem then set it from params
  if (!localTokenExpiresIn || localTokenExpiresIn === "undefined") {
    setLocalTokenExpiresIn(expires_in);
  }

  const EXPIRATION_TIME = getLocalTokenExpiresIn() * 1000; // 1 hour in milliseconds -> 3600 secounds * 1000 -> 3600 Spotify default

  //Check if token has expired
  if (Date.now() - getLocalTokenTimestamp() > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing token ...");
    refreshAccessToken();
  }

  //If no refresh_token in localstorage, then set it from params
  if (!localRefreshToken || localRefreshToken === "undefined") {
    setLocalRefreshToken(refresh_token);
  }

  //If no access_token in localstorage, then set it from params
  if (!localAccessToken || localAccessToken === "undefined") {
    setLocalAccessToken(access_token);
    return access_token;
  }

  return localAccessToken;
};

//Method to logout user from application
export const logout = () => {
  localStorage.removeItem("spotify_expires_in");
  localStorage.removeItem("spotify_token_timestamp");
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_refresh_token");
};
