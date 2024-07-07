import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <img alt="thumbnails" src={thumbnails.high} />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
