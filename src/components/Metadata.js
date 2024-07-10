import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, VIDEO_DETAILS_API } from "../utils/constants";

const Metadata = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null); // Initialize as null
  const [subState, setSubState] = useState(false);

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
      console.log(json);
      setVideoDetails(json.items[0]);
    }
  };

  const changeSubState = () => {
    setSubState(!subState); // Toggle subState
  };

  return (
    <div className="max-w-screen-lg p-2">
      {videoDetails && ( // Only render if videoDetails is not null
        <>
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
        </>
      )}
    </div>
  );
};

export default Metadata;
