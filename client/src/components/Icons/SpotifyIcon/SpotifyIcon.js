import React from "react";
import Icon from "../Icon";
import styled from "styled-components/macro";

const StyledIcon = styled(Icon)`
  fill: var(--color-spotify-logo-green);

  & svg {
    width: 5rem;
    height: 5rem;
  }
`;

const SpotifyIcon = ({ className }) => {
  return <StyledIcon type="icon-spotify" className={className} />;
};

export default SpotifyIcon;
