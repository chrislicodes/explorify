import React, { useState, useEffect } from "react";
import { getMyInfo } from "../../api/index";
import { getAccessToken } from "../../auth/index";

import { useHistory } from "react-router-dom";

import classes from "./Explorify.module.css";

const Explorify = function () {
  const [userInfo, setUserInfo] = useState("");
  const routerHistory = useHistory();

  //LIFECYCLE
  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      //   return routerHistory.push("/login");
    }

    //TEMPORARY
    getMyInfo().then((res) => {
      setUserInfo(JSON.stringify(res, null, 4));
    });
  }, [routerHistory]);

  return (
    <div className={classes.App}>
      <pre>{userInfo}</pre>
    </div>
  );
};

export default Explorify;
