import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import SearchResultsPage from "./SearchResultsPage";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState(null);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /**
   *
   * searchCache = {
   *
   *    "iphone" : ["iphone 11", "iphone 14"]
   * }
   *
   * searchQuery = iphone
   *
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionsClick = (searchedItem) => {
    console.log("Yes ");
    setSuggestionSelected(searchedItem);
    setShowSuggestions(false);
  };

  if (suggestionSelected) {
    return <SearchResultsPage searchedItem={suggestionSelected} />;
  }

  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg">
      <div className="flex col-span-2 ">
        <img
          onClick={toggleMenuHandler}
          className="h-7 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-6 mx-2 cursor-pointer"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNvE0BVKYsH-EceH_u2MBDgbiowadaNTTEA&s"
          />
        </a>
      </div>
      <div className="col-span-8">
        <div>
          <input
            type="text"
            className=" px-3 w-1/2 rounded-l-full border border-gray-400 p-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className="px-4 py-1 rounded-r-full border border-gray-400 bg-gray-100">
            🔍
          </button>
        </div>
        <div className=" bg-white p-2 w-[28rem] shadow-lg rounded-lg border border-gray-200 absolute">
          <ul>
            {showSuggestions &&
              suggestions.map((s) => (
                <li
                  key={s}
                  className="py-1 px-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionsClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-3">
        <img
          className="h-7 text-right"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
