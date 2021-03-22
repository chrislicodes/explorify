import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWRConfig } from "swr";

import GlobalStyles from "../styles/GlobalStyle";
import Login from "../views/Login/Login";

import { getAccessToken } from "../auth";
import Explorify from "../layout/Explorify";
import { AuthProvider } from "../context/AuthContext";

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
    <AuthProvider>
      <GlobalStyles />
      {accessToken ? (
        <SWRConfig
          value={{
            refreshInterval: 5000,
            fetcher: (endpointURL) =>
              axiosInstance.get(endpointURL).then((res) => res.data),
          }}
        >
          <Explorify />
        </SWRConfig>
      ) : (
        <Login />
      )}
    </AuthProvider>
  );
};

export default App;
