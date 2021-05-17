import React from "react";
import CardItem from "components/items/CardItem";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import useSWR from "swr";

function ArtistCardSection({
  data,
  fetchURL,
  link,
  title,
  backgroundHidden,
  overflowHidden,
}) {
  let { data: fetchData } = useSWR(() => !data && fetchURL);

  let renderData;

  if (fetchURL) {
    renderData = fetchData && fetchData["artists"];
  } else {
    renderData = data;
  }

  const content = renderData?.map((item) => {
    let link = `artist/${item.id}`;
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
    <CardSectionTemplate
      link={link}
      title={title}
      overflowHidden={overflowHidden}
      cards={content}
    />
  );
}

export default ArtistCardSection;
