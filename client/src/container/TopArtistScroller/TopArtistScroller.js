import React from "react";
import HorizontalCardContainer from "../../components/HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../../components/TitleWrapper/TitleWrapper";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Loader from "../../components/Loader/Loader";
import useSWR from "swr";

const TopArtistScroller = ({
  timeRange = "short_term",
  limit = 20,
  offset = 0,
}) => {
  const { data: topArtists } = useSWR(
    `/me/top/artists?time_range=${timeRange}&limit=${limit}`
  );

  const cardItems =
    topArtists &&
    topArtists.items.slice(offset).map((artist) => (
      <li key={artist.id}>
        <ArtistCard artist={artist} />
      </li>
    ));

  return (
    <>
      {cardItems ? (
        <TitleWrapper
          headline={"Your favorite artists"}
          link={`/explore/artists/top`}
        >
          <HorizontalCardContainer>{cardItems}</HorizontalCardContainer>
        </TitleWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtistScroller;
