import React from "react";
import { Route, Redirect } from "react-router-dom";
import Explorify from "../../layouts/Explorify/Explorify";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth ? (
        <Explorify>
          <Component {...props} />
        </Explorify>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default GuardedRoute;
