import React, { useContext } from "react";
import { logout } from "auth";
import Button from "components/shared/Button";
import styled from "styled-components";
import SearchBar from "components/shared/SearchBar";
import PlaceholderImage from "components/shared/PlaceholderImage";
import theme from "styles/theme";
import { UserContext } from "store/UserContext";
import BackIcon from "components/shared/Icon/BackIcon";

const UserWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-size-sm-1);

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
  margin: 0 var(--spacing-size-md-1);
  gap: var(--spacing-size-md-1);
`;

const UserImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
`;

const StyledSearchBar = styled(SearchBar)``;

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

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  margin-right: auto;
  gap: var(--spacing-size-sm-2);
`;

const HeaderComponents = () => {
  const { userData } = useContext(UserContext);
  const userName = userData && userData.display_name;
  const userImageURL = userData && userData.images[0]?.url;

  return (
    <>
      <ContentWrapper>
        <ItemWrapper>
          <StyledSearchBar />
          <BackIcon />
        </ItemWrapper>

        {userData && (
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
        )}
        <Button onClick={logout}>LOGOUT</Button>
      </ContentWrapper>
    </>
  );
};

export default HeaderComponents;
