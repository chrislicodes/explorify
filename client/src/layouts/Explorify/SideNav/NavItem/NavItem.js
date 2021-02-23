import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";
import Icon from "../../../../components/Icons/Icon/Icon";
import { capitalizeWord } from "../../../../utils/utils";

/**
 * Returns true if the current location is active on the NavItem
 * @param {null} _ Match Placeholder
 * @param {Object} location Object passed by React Router
 * @param {string} target Target URL to be compared with current location
 * @returns {boolean} true if current location is the respective NavItem
 */
const checkIfActive = (_, location, target) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === target;
};

const NavItem = (props) => {
  //Removing the slash in front of target
  const target = props.target.slice(1);

  return (
    <li className={classes.NavItem}>
      <NavLink
        to={props.target}
        isActive={(match, location) =>
          checkIfActive(match, location, props.target)
        }
        activeClassName={classes.active}
      >
        <div className={classes.NavItemInfo}>
          <Icon type={props.icon} className={classes.Icon} />
          <p>{capitalizeWord(target ? target : "Home")}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default NavItem;
