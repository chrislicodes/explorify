import React, { useState, useEffect } from "react";
import Explorify from "../layout/Explorify";

import { AuthProvider } from "../context/AuthContext";
import GlobalStyles from "../styles/GlobalStyle";
import { getAccessToken } from "../auth";
import Login from "../views/Login/Login";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  return (
    <AuthProvider>
      <GlobalStyles />
      {accessToken ? <Explorify /> : <Login />}
    </AuthProvider>
  );
};

export default App;
