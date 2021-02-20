
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAccessToken } from "../../auth/index";

import Login from "../../components/Login/Login";
import Error404 from "../../components/404/404";

import Explorify from "../Explorify/Explorify";

import GuardedRoute from "../GuardedRoute/GuardedRoute";
import UngardedRoute from "../UnguardedRoute/UnguardedRoute";

const App = () => {
  const token = getAccessToken();

  return (
    <Router>
      <Switch>
        {/* <Route path="/login" component={Login} /> */}
        <UngardedRoute path="/login" component={Login} auth={token} />
        {/* <Route path="/" component={Explorify} /> */}
        <GuardedRoute path="/" component={Explorify} auth={token} />
        <Route component={Error404} />
      </Switch>
    </Router>

import React, { useState, useEffect } from "react";
import { getAccessToken, getRecentlyPlayed } from "../../api/index";
import SongContainer from "../../components/SongContainer/SongContainer";

import classes from "./App.module.css";
import "./colors.css";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  //LIFECYCLE
  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  }, []);

  //TEMPORARY
  const login = accessToken ? (
    <p>You are logged in!</p>
  ) : (
    <button>
      <a href="http://localhost:8080/login">Login!</a>
    </button>
  );

  return (
    <div className={classes.App}>
      {login}
      {recentlyPlayedSongs ? (
        <SongContainer tracks={recentlyPlayedSongs.items} />
      ) : null}
    </div>
  );
};

export default App;
