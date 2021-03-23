import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Analyze from "../pages/Analyze/Analyze";
import Explore from "../pages/Explore/Explore";
import About from "../pages/About/About";
import TrackOverview from "../container/TrackOverview/TrackOverview";
import ArtistOverview from "../container/ArtistOverview/ArtistOverview";
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
        path: "/explore",
        key: "EXPLORE",
        exact: true,
        component: Explore,
      },
      {
        path: "/explore/artists/top",
        key: "EXPLORE_TOP_ARTISTS",
        exact: true,
        component: () => <div>TopArtist</div>,
      },
      {
        path: "/explore/artists/:artistID",
        key: "EXPLORE_TRACK",
        exact: true,
        component: ArtistOverview,
      },
      {
        path: "/explore/track/:trackID",
        key: "EXPLORE_TRACK",
        exact: true,
        component: TrackOverview,
      },
      {
        path: "/about",
        key: "ABOUT",
        exact: true,
        component: About,
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
