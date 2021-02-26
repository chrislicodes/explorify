import React, { useContext } from "react";

import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

const Analyze = () => {
  const { display_name: name, images } = useContext(AuthContext);

  return (
    <div>
      Analyze {name}
      <img src={images[0].url} alt="test" />

      <Loader width="50" height="50" />
    </div>
  );
};

export default Analyze;
