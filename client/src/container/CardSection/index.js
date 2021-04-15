import React from "react";
import CardWrapperTemplate from "components/templates/CardWrapperTemplate";
import SectionTemplate from "components/templates/SectionTemplate";
import CardItem from "components/items/CardItem";
import Loader from "components/shared/Loader";

// Refactor Factory Pattern
const processData = (data, type) => {
  let link = `${type}/${data.id}`;
  let imageURL = data.images?.length > 0 && data.images[0].url;
  let primaryInfo = data.name;
  let secondaryInfo;

  switch (type) {
    case "artist":
      secondaryInfo = data.genres[0] || "Artist";
      break;

    case "album":
      secondaryInfo = data.artists[0].name;
      break;

    case "track":
      imageURL = data.album.images.length > 0 && data.album.images[1].url;
      secondaryInfo = data.artists[0].name;
      break;

    default:
      break;
  }

  return { imageURL, link, primaryInfo, secondaryInfo };
};

const CardSection = ({ data, type, title, link, overflowHidden = true }) => {
  const content = data.map((item) => {
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
        />
      </li>
    );
  });

  return (
    <>
      <SectionTemplate headline={title || "Section"} link={link}>
        <CardWrapperTemplate overflowHidden={overflowHidden}>
          {content || <Loader />}
        </CardWrapperTemplate>
      </SectionTemplate>
    </>
  );
};

export default CardSection;
