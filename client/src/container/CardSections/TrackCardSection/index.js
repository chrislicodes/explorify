import React from "react";
import CardItem from "components/items/CardItem";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import useSWR from "swr";

export const getTrackData = (item) => {
  const id = item.id;
  const trackLink = `track/${item.id}`;
  const imageURL = item.album.images.length > 0 && item.album.images[1].url;
  const primaryInfo = item.name;
  const secondaryInfo = item.artists[0].name;
  const previewURL = item.preview_url;
  const trackURI = item.uri;

  return {
    id,
    trackLink,
    imageURL,
    primaryInfo,
    secondaryInfo,
    previewURL,
    trackURI,
  };
};

function TrackCardSection({
  data,
  fetchURL,
  link,
  title,
  backgroundHidden,
  overflowHidden,
  onCardItemClick,
  iconType,
}) {
  let { data: fetchData } = useSWR(() => !data && fetchURL);

  let renderData;

  console.log("Fetchdata", fetchData);

  if (fetchURL) {
    renderData = fetchData && fetchData["tracks"];
  } else {
    renderData = data;
  }

  const content = renderData?.map((item) => {
    const {
      id,
      trackLink,
      imageURL,
      primaryInfo,
      secondaryInfo,
      previewURL,
      trackURI,
    } = getTrackData(item);
    return (
      <li key={id}>
        <CardItem
          id={id}
          trackURI={trackURI}
          imageURL={imageURL}
          link={trackLink}
          primaryInfo={primaryInfo}
          secondaryInfo={secondaryInfo}
          type="track"
          backgroundHidden={backgroundHidden}
          previewURL={previewURL}
          onClick={onCardItemClick}
          iconType={iconType}
        />
      </li>
    );
  });

  return (
    <CardSectionTemplate
      link={link}
      title={title}
      overflowHidden={overflowHidden}
      cards={content}
    />
  );
}

export default TrackCardSection;
