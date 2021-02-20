import React from "react";
import { Route, Redirect } from "react-router-dom";

const UngardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth ? <Redirect to="/" /> : <Component {...props} />)}
  />
);

export default UngardedRoute;
