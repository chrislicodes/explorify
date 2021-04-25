import React from "react";
import CardItem from "components/items/CardItem";
import CardSectionTemplate from "components/templates/CardSectionTemplate";

function ArtistCardSection({ data, link, title, backgroundHidden }) {
  const content = data.map((item) => {
    let link = `album/${item.id}`;
    let imageURL = item.images?.length > 0 && item.images[0].url;
    let primaryInfo = item.name;
    let secondaryInfo = item.genres[0] || "Artist";

    return (
      <li key={item.id}>
        <CardItem
          imageURL={imageURL}
          link={link}
          primaryInfo={primaryInfo}
          secondaryInfo={secondaryInfo}
          type="artist"
          backgroundHidden={backgroundHidden}
        />
      </li>
    );
  });

  return (
    <CardSectionTemplate link={link} title={title}>
      {content}
    </CardSectionTemplate>
  );
}

export default ArtistCardSection;
