import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API CALL - " + searchQuery);
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

  const handlSuggestionsClick = (searchedContent) => {
    setShowSuggestions(false);
    navigate(`/results?search_query=${searchedContent}`);

  };

  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg">
      <div className="flex col-span-2">
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
      <div className="col-span-9 relative">
        <div>
          <input
            type="text"
            className="px-3 w-1/2 rounded-l-full border border-gray-400 p-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            //onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="px-4 py-1 rounded-r-full border border-gray-400 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white p-2 w-[28rem] shadow-lg rounded-lg border border-gray-200 absolute">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-1 px-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlSuggestionsClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center mr-4">
        <div className="w-11">
          <img src="https://thumbs.dreamstime.com/b/notification-icon-vector-material-design-social-media-element-user-interface-sign-eps-ui-image-illustration-new-message-bell-icons-107566385.jpg" />
        </div>
        <img
          className="h-9 ml-2"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
