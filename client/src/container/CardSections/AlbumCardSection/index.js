import React from "react";
import CardItem from "components/items/CardItem";
import CardSectionTemplate from "components/templates/CardSectionTemplate";
import useSWR from "swr";

function AlbumCardSection({
  data,
  fetchURL,
  link,
  title,
  backgroundHidden,
  overflowHidden,
}) {
  //can either receive data directly (only for searchResults the case at the moment) or will fetch the data
  //for filtering we could pass a comparator function
  let { data: fetchData } = useSWR(() => !data && fetchURL);

  let renderData;

  if (fetchURL) {
    renderData = fetchData && fetchData["items"];
  } else {
    renderData = data;
  }

  const content = renderData?.map((item) => {
    let link = `album/${item.id}`;
    let imageURL = item.images?.length > 0 && item.images[0].url;
    let primaryInfo = item.name;
    let secondaryInfo = item.artists[0].name;

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

export default AlbumCardSection;
