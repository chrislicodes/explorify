import React from "react";
import theme from "../../../../styles/theme";
import mixins from "../../../../styles/mixins";
import { NavLink } from "react-router-dom";
import Icon from "../../../../components/Icons/Icon";
import { capitalizeWord } from "../../../../utils";

import styled from "styled-components/macro";

// ---------------------------------------
// -------------  STYLING
// ---------------------------------------

const NavLinkStyled = styled(NavLink).attrs({
  activeClassName: "active",
})`
  flex: 1;
  ${mixins.flexCenter}
  transition: ${theme.transition};

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 0.6rem;
    background-color: var(--color-spotify-green);
    box-shadow: 3px 0px 26px -1px rgba(29, 185, 84, 0.5);
    opacity: 0;
    transition: ${theme.transition};

    @media ${theme.bp.desktopXS} {
      height: 0.4rem;
      width: 100%;
    }
  }

  &.active {
    background-color: var(--color-grey-2);

    & p {
      color: var(--color-white);
    }

    & svg {
      fill: var(--color-white);
    }

    &::before {
      opacity: 1;
    }
  }
`;

const NavItemDescription = styled.div`
  display: flex;
  width: 20rem;
  z-index: 1;
  transition: ${theme.transition};

  & p {
    margin-left: var(--spacing-size-md-2);
    font-size: var(--font-size-lg);
    color: var(--color-grey-5);
    transition: ${theme.transition};
  }

  & div svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    fill: var(--color-grey-5);
    transition: ${theme.transition};
  }

  @media ${theme.bp.desktopXS} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
      margin-left: 0;
      font-size: var(--font-size-md);
    }

    & div svg {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 0.2rem;
      margin-top: 0.5rem;
    }
  }
`;

const NavItemWrapper = styled.li`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  height: 7rem;
  cursor: pointer;
  transition: ${theme.transition};

  &:hover ${NavLinkStyled} {
    background-color: var(--color-grey-2);

    &::before {
      opacity: 1;
    }

    & ${NavItemDescription} {
      & p {
        color: var(--color-white);
      }

      & div svg {
        fill: var(--color-white);
      }
    }
  }
`;
// ---------------------------------------
// -------------  LOGIC
// ---------------------------------------

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
    <NavItemWrapper>
      <NavLinkStyled
        to={props.target}
        isActive={(match, location) =>
          checkIfActive(match, location, props.target)
        }
      >
        <NavItemDescription>
          <Icon type={props.icon} />
          <p>{capitalizeWord(target ? target : "Home")}</p>
        </NavItemDescription>
      </NavLinkStyled>
    </NavItemWrapper>
  );
};

export default NavItem;
