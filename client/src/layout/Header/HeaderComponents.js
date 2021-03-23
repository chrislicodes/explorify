import React from "react";
import { logout } from "../../auth/auth";

import Button from "../../components/Button";
import styled from "styled-components";
import useSWR from "swr";

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
        <UserImage src={userImageURL} alt="user" />
        <p>{userName}</p>
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
