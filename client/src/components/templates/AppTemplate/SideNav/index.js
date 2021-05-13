import React from "react";
import NavItem from "./NavItem";
import AppTitle from "./AppTitle";
import styled from "styled-components/macro";

const navItems = [
  { target: "/home", icon: "icon-home" },
  { target: "/top-artists", icon: "icon-headphones", label: "Top Artists" },
  { target: "/top-tracks", icon: "icon-music", label: "Top Tracks" },
  { target: "/discover", icon: "icon-compass" },
  {
    target: "/explore",
    icon: "icon-search",
  },
];

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-sm-2);
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
            label={navItem.label}
          />
        ))}
      </NavLinks>
    </>
  );
};

export default SideNav;
