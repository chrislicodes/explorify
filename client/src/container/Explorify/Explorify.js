import React from "react";

import { getRecentlyPlayed } from "../../api/index";

import SongContainer from "../../components/SongContainer/SongContainer";

import classes from "./Explorify.module.css";

const Explorify = ({ children }) => {
   const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  //LIFECYCLE
  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  }, []);
  
  return (
    <div className={classes.Container}>
      <div className={classes.Explorify}>
        {recentlyPlayedSongs ? (
          <SongContainer tracks={recentlyPlayedSongs.items} />
        ) : null}
      </div>
   <div>
      <div>{children}</div>
    </div>
  );
};

export default Explorify;
