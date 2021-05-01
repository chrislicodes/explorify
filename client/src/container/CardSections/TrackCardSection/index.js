import React from "react";
import CardItem from "components/items/CardItem";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import useSWR from "swr";

function TrackCardSection({
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
    renderData = (fetchData && fetchData["tracks"]) || [];
  } else {
    renderData = data || [];
  }

  const content =
    renderData.length > 0 &&
    renderData.map((item) => {
      let link = `track/${item.id}`;
      let imageURL = item.album.images.length > 0 && item.album.images[1].url;
      let primaryInfo = item.name;
      let secondaryInfo = item.artists[0].name;
      let previewURL = item.preview_url;

      return (
        <li key={item.id}>
          <CardItem
            imageURL={imageURL}
            link={link}
            primaryInfo={primaryInfo}
            secondaryInfo={secondaryInfo}
            type="track"
            backgroundHidden={backgroundHidden}
            previewURL={previewURL}
          />
        </li>
      );
    });

  return (
    <CardSectionTemplate
      link={link}
      title={title}
      overflowHidden={overflowHidden}
    >
      {content}
    </CardSectionTemplate>
  );
}

export default TrackCardSection;
