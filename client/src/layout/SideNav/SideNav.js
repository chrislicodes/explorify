import React from "react";
import NavItem from "./NavItem";
import AppTitle from "./AppTitle";

import styled from "styled-components/macro";

const navItems = [
  { target: "/home", icon: "icon-home" },
  { target: "/analyze", icon: "icon-stats-bars" },
  { target: "/explore", icon: "icon-compass" },
  { target: "/about", icon: "icon-notification" },
];

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-md);
`;

const SideNav = () => {
  return (
    <>
      <AppTitle />
      <NavLinks>
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.target}
            target={navItem.target}
            icon={navItem.icon}
          />
        ))}
      </NavLinks>
    </>
  );
};

export default SideNav;
