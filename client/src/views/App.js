import React from "react";
import Routes from "../routes/Routes";

import { AuthProvider } from "../context/AuthContext";
import GlobalStyles from "../styles/GlobalStyle";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
};

export default App;
