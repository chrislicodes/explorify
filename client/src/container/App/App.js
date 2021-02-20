import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAccessToken } from "../../auth/index";

import Login from "../../components/Login/Login";
import Error404 from "../../components/404/404";

import Explorify from "../Explorify/Explorify";
import Home from "../Home/Home";
import Analyze from "../Analyze/Analyze";

import GuardedRoute from "../../routes/GuardedRoute/GuardedRoute";
import UngardedRoute from "../../routes/UnguardedRoute/UnguardedRoute";

import "./colors.css";

const App = () => {
  const token = getAccessToken();

  return (
    <Router>
      <Switch>
        <UngardedRoute path="/login" component={Login} auth={token} />
        <Route>
          <Explorify>
            <Switch>
              <GuardedRoute exact path="/" component={Home} auth={token} />
              <GuardedRoute path="/analyze" component={Analyze} auth={token} />
              <Route path="*" exact component={Error404} />
            </Switch>
          </Explorify>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
