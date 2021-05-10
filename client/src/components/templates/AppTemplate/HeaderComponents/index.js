import React from "react";
import { logout } from "auth";
import Button from "components/shared/Button";
import styled from "styled-components";
import useSWR from "swr";
import SearchBar from "components/shared/SearchBar";
import PlaceholderImage from "components/shared/PlaceholderImage";
import theme from "styles/theme";

const UserWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${theme.bp.mobileL} {
    display: none;
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
        <UserWrapper>
          {userImageURL ? (
            <UserImage src={userImageURL} alt="user" />
          ) : (
            <ImageWrapper>
              <StyledPlaceholderImage />
            </ImageWrapper>
          )}
          <p>{userName}</p>
        </UserWrapper>
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
