import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <Link to={"/" + props.target}>
        <p>{props.target}</p>
      </Link>
    </li>
  );
};

export default NavItem;
