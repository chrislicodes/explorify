import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Discover from "../pages/Discover/Discover";
import Explore from "../pages/Explore/Explore";
import TrackOverview from "../container/TrackOverview";
import ArtistOverview from "../container/ArtistOverview";
import AlbumOverview from "../container/AlbumOverview";
import NotFound404 from "../pages/NotFound404";
import { getAccessToken } from "../auth";

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
        path: "/discover",
        key: "DISCOVER",
        exact: true,
        component: Discover,
      },
      {
        path: "/top-artists",
        key: "TOP_ARTISTS",
        exact: true,
        component: () => <div>TopArtist</div>,
      },
      {
        path: "/top-tracks",
        key: "TOP_TRACKS",
        exact: true,
        component: () => <div>TopTracks</div>,
      },
      {
        path: "/explore",
        key: "EXPLORE",
        exact: true,
        component: Explore,
      },
      {
        path: "/explore/recently-played",
        key: "RECENTLY_PLAYED",
        exact: true,
        component: () => <div>RecentlyPlayed</div>,
      },
      {
        path: "/explore/artist/:artistID",
        key: "EXPLORE_ARTIST",
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
        path: "/explore/album/:albumID",
        key: "EXPLORE_ALBUM",
        exact: true,
        component: AlbumOverview,
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
      <Route component={NotFound404} />
    </Switch>
  );
}
