import React from "react";
import { logout } from "auth";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import styled from "styled-components";
import useSWR from "swr";
import { Link } from "react-router-dom";
import SearchBar from "components/shared/SearchBar";
import PlaceholderImage from "components/shared/PlaceholderImage";

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
  margin: 0 2rem;
  gap: 2rem;
`;

const UserImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
`;

const StyledSearchBar = styled(SearchBar)`
  margin-right: auto;
`;

const StyledPlaceholderImage = styled(PlaceholderImage)`
  width: auto;
  height: 100%;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 4rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const HeaderComponents = () => {
  const { data: userData } = useSWR("/me");
  console.log(userData);
  const userName = userData && userData.display_name;
  const userImageURL = userData && userData.images[0]?.url;

  return (
    <>
      <ContentWrapper>
        <StyledSearchBar />
        {/* <StyledLink to="/explore">
          <StyledIcon type="icon-search" />
        </StyledLink> */}
        {userImageURL ? (
          <UserImage src={userImageURL} alt="user" />
        ) : (
          <ImageWrapper>
            <StyledPlaceholderImage />
          </ImageWrapper>
        )}
        <p>{userName}</p>
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
