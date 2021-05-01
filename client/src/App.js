import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWRConfig } from "swr";

import GlobalStyles from "styles/GlobalStyle";
import Login from "pages/Login";

import { getAccessToken } from "auth";
import AppTemplate from "components/templates/AppTemplate";

import ROUTES, { RenderRoutes } from "routes/Routes";

import { AudioProvider } from "store/AudioContext";
import { SearchProvider } from "store/SearchContext";

const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    "Content-Type": "application/json",
  },
});

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  return (
    <>
      <GlobalStyles />
      {accessToken ? (
        <SWRConfig
          value={{
            fetcher: (endpointURL) =>
              axiosInstance.get(endpointURL).then((res) => res.data),
          }}
        >
          <SearchProvider>
            <AppTemplate>
              <AudioProvider>
                <RenderRoutes routes={ROUTES} />
              </AudioProvider>
            </AppTemplate>
          </SearchProvider>
        </SWRConfig>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
