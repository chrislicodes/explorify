import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAccessToken } from "../auth/auth";

import Login from "../views/Login/Login";
import Home from "../views/Home/Home";
import Analyze from "../views/Analyze/Analyze";
import Error404 from "../views/NotFound404/NotFound404";

import GuardedRoute from "./middleware/GuardedRoute";
import UngardedRoute from "./middleware/UnguardedRoute";

const Routes = () => {
  const token = getAccessToken();

  return (
    <Router>
      <Switch>
        <UngardedRoute path="/login" component={Login} auth={token} />
        <GuardedRoute exact path="/" component={Home} auth={token} />
        <GuardedRoute path="/analyze" component={Analyze} auth={token} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </Router>
  );
};

export default Routes;
