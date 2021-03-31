import React from "react";
import { logout } from "../../auth/auth";

import Button from "../../components/Button";
import Icon from "../../components/Icons/Icon";
import styled from "styled-components";
import useSWR from "swr";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 100%;
  border-radius: 100%;
  background-color: var(--color-grey-3);
  padding-top: 0.5rem;
`;

const StyledIcon = styled(Icon)`
  &:hover svg {
    fill: var(--color-spotify-green);
  }

  & svg {
    height: 2rem;
    width: 100%;
    fill: var(--color-white);
    transition: all 0.2s;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;
  width: 100%;

  & > * {
    margin-right: var(--spacing-size-md);
  }
`;

const UserImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
`;

const HeaderComponents = () => {
  const { data: userData } = useSWR("/me");
  const userName = userData && userData.display_name;
  const userImageURL = userData && userData.images[0].url;

  return (
    <>
      <ContentWrapper>
        <StyledLink to="/explore">
          <StyledIcon type="icon-search" />
        </StyledLink>
        <UserImage src={userImageURL} alt="user" />
        <p>{userName}</p>
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
