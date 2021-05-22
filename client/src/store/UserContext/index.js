import React, { useState, useEffect } from "react";
import { axiosInstance } from "App.js";

export const UserContext = React.createContext({
  userData: "",
  setUserData: () => {},
});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axiosInstance.get("/me");
        setUserData(user.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const value = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
