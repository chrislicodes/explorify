import React, { useState, useEffect } from "react";
import { getRecentlyPlayed } from "../../api/index";
import { Switch, Route, Link } from "react-router-dom";

import SongContainer from "../../components/SongContainer/SongContainer";

import Home from "../Home/Home";
import Analyze from "../Analyze/Analyze";

import classes from "./Explorify.module.css";

const Explorify = ({ children }) => {
  console.log(children);
  // const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  // //LIFECYCLE
  // useEffect(() => {
  //   getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  // }, []);

  return (
    <div>
      <div>{children}</div>
    </div>
    // <Switch>
    //   <Route component={Home} />
    //   <Route exact to="/analyze" component={Analyze} />
    // </Switch>

    // <div className={classes.Explorify}>
    //   {recentlyPlayedSongs ? (
    //     <SongContainer tracks={recentlyPlayedSongs.items} />
    //   ) : null}
    // </div>
  );
};

export default Explorify;
