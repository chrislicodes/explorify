import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../views/Home/Home";
import Analyze from "../views/Analyze/Analyze";
import TrackOverview from "../views/Analyze/TrackOverview/TrackOverview";
import ArtistOverview from "../views/Analyze/ArtistOverview/ArtistOverview";
import { getAccessToken } from "../auth/auth";

// https://www.ryanjyost.com/react-routing/

const authToken = getAccessToken();

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    component: (props) => {
      if (!authToken) {
        return <Redirect to={"/login"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => <Redirect to={"/home"} />,
      },
      {
        path: "/home",
        key: "HOME",
        exact: true,
        component: Home,
      },
      {
        path: "/analyze",
        key: "ANALYZE",
        exact: true,
        component: Analyze,
      },
      {
        path: "/analyze/artists/top",
        key: "ANALYZE_TOP_ARTISTS",
        exact: true,
        component: Home,
      },
      {
        path: "/analyze/artists/:artistID",
        key: "ANALYZE_TRACK",
        exact: true,
        component: ArtistOverview,
      },
      {
        path: "/analyze/track/:trackID",
        key: "ANALYZE_TRACK",
        exact: true,
        component: TrackOverview,
      },
    ],
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
