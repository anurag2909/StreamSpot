import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, VIDEO_DETAILS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { openDesc } from "../utils/descSlice";

const Metadata = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null); // Initialize as null
  const [subState, setSubState] = useState(false);
  const isDescOpen = useSelector((store) => store.desc.isDescOpen); // Correctly access the state

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const videoId = searchParams.get("v");
    if (videoId) {
      const data = await fetch(
        `${VIDEO_DETAILS_API}${videoId}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      setVideoDetails(json.items[0]);
    }
  };

  const changeSubState = () => {
    setSubState(!subState); // Toggle subState
  };

  const dispatch = useDispatch();
  
  const descOpenHandler = () => {
    dispatch(openDesc());
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInTime = now - date;

    const differenceInDays = Math.floor(
      differenceInTime / (1000 * 60 * 60 * 24)
    );
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInDays / 365);

    if (differenceInYears >= 1) {
      return differenceInYears === 1
        ? "1 year ago"
        : `${differenceInYears} years ago`;
    } else if (differenceInMonths >= 1) {
      return differenceInMonths === 1
        ? "1 month ago"
        : `${differenceInMonths} months ago`;
    } else if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  if (!videoDetails) {
    return null; // Handle the case where videoDetails is not yet loaded
  }

  const description = videoDetails.snippet.description;
  const paragraphs = description.split("\n");

  return (
    <div className="max-w-screen-lg p-2">
      <h1 className="font-bold text-2xl px-2 py-2 overflow-hidden">
        {videoDetails.snippet.localized.title}
      </h1>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <h1 className="font-semibold text-lg px-4 py-1">
              {videoDetails.snippet.channelTitle}
            </h1>
            <button
              className="bg-black text-white text-sm font-bold rounded-lg p-2"
              onClick={changeSubState} // Pass function reference
            >
              {subState ? "Subscribed 🤝" : "Subscribe 🔔"}
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <button className="bg-gray-200 text-black text-sm font-bold rounded-l-full p-3 hover:bg-gray-300">
                👍{Math.round(videoDetails.statistics.likeCount / 1000)}K
              </button>
              <div className="h-6 border-l border-gray-300"></div>
              <button className="bg-gray-200 text-black text-sm font-bold rounded-r-full px-2 py-3 hover:bg-gray-300">
                👎
              </button>
            </div>
            <button className="bg-gray-200 text-black text-sm font-bold rounded-xl p-3 hover:bg-gray-300">
              Share
            </button>
            <button className="bg-gray-200 text-black text-sm font-bold rounded-xl p-3 hover:bg-gray-300">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 bg-gray-300 rounded-lg p-4 m-4">
        <div className="flex space-x-3">
          <p className="font-semibold">
            {Math.round(videoDetails.statistics.viewCount / 1000000)}M Views
          </p>
          <p className="font-semibold">
            Published: {timeAgo(videoDetails.snippet.publishedAt)}
          </p>
        </div>
        <div className="py-2 font-semibold justify-end">
          <p>{paragraphs[0]}</p>
          <p onClick={descOpenHandler} className="text-black font-bold cursor-pointer">more...</p>
          {isDescOpen && paragraphs.slice(1).map((paragraph, index) => (
            <p key={index} className="mb-1 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metadata;
