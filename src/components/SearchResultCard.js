import React from "react";

const SearchResultCard = ({ data }) => {
  const generateRandomWeeks = () => {
    const minWeeks = 1;
    const maxWeeks = 5;
    const randomWeeks =
      Math.floor(Math.random() * (maxWeeks - minWeeks + 1)) + minWeeks;
    return randomWeeks;
  };

  const generateRandomViewCount = () => {
    const minViews = 1000;
    const maxViews = 100000000;
    const viewCount =
      Math.floor(Math.random() * (maxViews - minViews + 1)) + minViews;

    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    } else {
      return viewCount.toString();
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:bg-gray-200">
      <div className="flex">
        <div>
          <img
            className="w-[550px] rounded-lg h-[360px]"
            alt="thumbnail"
            src={data.snippet.thumbnails?.high?.url}
          />
        </div>
        <div className="w-1/2 px-2 mx-2 font-sans">
          <h4 className="font-semibold text-lg">{data.snippet.title}</h4>
          <p className="text-sm">
            {generateRandomViewCount()} views . {generateRandomWeeks()} weeks
            ago
          </p>
          <div className="py-2 flex items-center">
            <img
              className="w-8 h-8 rounded-full"
              alt="logo"
              src="https://yt3.ggpht.com/m9WvArAk8ycx159cbze1Y9WV6B_dvEC1PMoxy_fZvdFivJWiB-dcA5u0i7Y2V9x7LAPDGkMn0g=s68-c-k-c0x00ffffff-no-rj"
            />
            <p className="font-sans px-2 py-1">
              {data.snippet.channelTitle}{" "}
              <span className="text-xs bg-blue-900 rounded-full ml-1 text-white">
                ✔️
              </span>
            </p>
          </div>
          <p className="text-sm py-3">{data.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
