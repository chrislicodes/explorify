import axios from "axios";
import { getHashParams } from "../utils/utils";

/**
 * SET methods for localstorage keys
 */
const setLocalTokenExpiresIn = (expires_in) => localStorage.setItem("spotify_expires_in", expires_in);
const setLocalTokenTimestamp = () => localStorage.setItem("spotify_token_timestamp", Date.now());
const setLocalAccessToken = (access_token) => {
  setLocalTokenTimestamp();
  localStorage.setItem("spotify_access_token", access_token);
};
const setLocalRefreshToken = (refresh_token) => localStorage.setItem("spotify_refresh_token", refresh_token);

/**
 * GET methods for localstorage keys
 */
const getLocalTokenExpiresIn = () => localStorage.getItem("spotify_expires_in");
const getLocalTokenTimestamp = () => localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () => localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () => localStorage.getItem("spotify_refresh_token");

/**
 * Refresh the access_token if serveral validations in function "getAccessToken" fails
 */
const refreshAccessToken = () => {
  axios
    .get(`http://localhost:8080/refresh-token?refresh_token=${getLocalRefreshToken()}`)
    .then(({ data }) => {
      const { access_token } = data;
      setLocalAccessToken(access_token);
      window.location.reload();
      return;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Returns access_token for the application to detect if user has a access_token -> is logged in
 * Checks for several condition and probaly refresh the access_token
 *
 * @returns {string || undefined} access_token
 */
export const getAccessToken = () => {
  const { error, access_token, refresh_token, expires_in } = getHashParams();

  // If error exist in getHashParams then refresh access_token
  if (error) {
    refreshAccessToken();
  }

  const localTokenExpiresIn = +getLocalTokenExpiresIn();
  const localAccessToken = getLocalAccessToken();
  const localRefreshToken = getLocalRefreshToken();

  // If no expires_in is in localstoragem then set it from getHashParams
  if (!localTokenExpiresIn || localTokenExpiresIn === "undefined") {
    setLocalTokenExpiresIn(expires_in);
  }

  const EXPIRATION_TIME = localTokenExpiresIn * 1000; // 1 hour in milliseconds -> 3600 secounds * 1000 -> 3600 Spotify default

  // If access_token is expired -> get new access_token with refresh_token
  if (Date.now() - getLocalTokenTimestamp() > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing token ...");
    refreshAccessToken();
  }

  // If no refresh_token in localstorage, then set it from getHashParams
  if (!localRefreshToken || localRefreshToken === "undefined") {
    setLocalRefreshToken(refresh_token);
  }

  // If no access_token in localstorage, then set it from getHashParams
  if (!localAccessToken || localAccessToken === "undefined") {
    setLocalAccessToken(access_token);
    return access_token;
  }

  return localAccessToken;
};

/**
 * Logout function to logout the user from the application
 * Removes all important localstorage keys and reload the application
 */
export const logout = () => {
  localStorage.removeItem("spotify_expires_in");
  localStorage.removeItem("spotify_token_timestamp");
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_refresh_token");
  window.location.reload("");
};
