import React, { createContext, useEffect, useState } from "react";

import { getAccessToken, logout } from "../auth/auth";
import { getMe } from "../api/api";
import LoaderScreen from "../components/LoaderScreen/LoaderScreen";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      getMe()
        .then(({ data }) => {
          setTimeout(() => {
            setUser(data);
          }, 200);
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            logout();
          }
        });
    }
  }, [token]);

  if (!user && token) {
    return <LoaderScreen />;
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
