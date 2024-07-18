import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Metadata from "./Metadata";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <iframe
            className="w-full rounded-xl"
            height="600"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Metadata />
        <CommentsContainer />
      </div>
      <div className="w-1/4">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
