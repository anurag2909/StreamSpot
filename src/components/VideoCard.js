import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
