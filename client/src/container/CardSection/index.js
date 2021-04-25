import React from "react";
import CardWrapperTemplate from "components/templates/CardSectionTemplate";
import CardItem from "components/items/CardItem";
import useSWR from "swr";
import PreviewBar from "components/shared/SongPreview";

// Refactor Factory Pattern
const processData = (data, type) => {
  let link = `${type}/${data.id}`;
  let imageURL = data.images?.length > 0 && data.images[0].url;
  let primaryInfo = data.name;
  let secondaryInfo;
  let previewURL;

  switch (type) {
    case "artist":
      secondaryInfo = data.genres[0] || "Artist";
      break;

    case "album":
      secondaryInfo = data.artists[0].name;
      break;

    case "track":
      imageURL = data.album.images.length > 0 && data.album.images[1].url;
      previewURL = data.preview_url;
      secondaryInfo = [<p>{data.artists[0].name}</p>];
      break;

    default:
      break;
  }

  return { imageURL, link, primaryInfo, secondaryInfo };
};

const CardSection = ({
  data,
  fetchURL,
  propertyName,
  type,
  title,
  link,
  overflowHidden = true,
  backgroundHidden = false,
}) => {
  let { data: fetchData } = useSWR(() => !data && fetchURL);

  let renderData;

  if (fetchURL) {
    renderData = (fetchData && fetchData[propertyName]) || [];
  } else {
    renderData = data || [];
  }

  const content = renderData.map((item) => {
    const { imageURL, link, primaryInfo, secondaryInfo } = processData(
      item,
      type
    );

    return (
      <li key={item.id}>
        <CardItem
          imageURL={imageURL}
          link={link}
          primaryInfo={primaryInfo}
          secondaryInfo={secondaryInfo}
          type={type}
          backgroundHidden={backgroundHidden}
        />
      </li>
    );
  });

  return (
    <>
      <CardWrapperTemplate
        overflowHidden={overflowHidden}
        backgroundHidden={backgroundHidden}
      >
        {content}
      </CardWrapperTemplate>
    </>
  );
};

export default CardSection;
