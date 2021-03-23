import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWRConfig } from "swr";

import GlobalStyles from "./styles/GlobalStyle";
import Login from "./pages/Login/Login";

import { getAccessToken } from "./auth/auth";
import Explorify from "./layout/Explorify";

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
          <Explorify />
        </SWRConfig>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
