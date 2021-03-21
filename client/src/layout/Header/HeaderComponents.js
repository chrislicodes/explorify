import React, { useContext } from "react";
import { logout } from "../../auth/auth";

import SearchIcon from "./components/SearchIcon/SearchIcon";
import { AuthContext } from "../../context/AuthContext";

import Button from "../../components/Button";
import styled from "styled-components";

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
  let { display_name: username, images: userimage } = useContext(AuthContext);

  return (
    <>
      <ContentWrapper>
        <SearchIcon />
        <UserImage src={userimage[0].url} alt="user" />
        <p>{username}</p>
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
