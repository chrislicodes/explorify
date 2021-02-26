import React from "react";
import Routes from "../routes/Routes";

import { AuthProvider } from "../context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
