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
  );
};

export default App;
