import React, { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [query] = useSearchParams();
  const searchQuery = query.get("search_query");

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();

    // console.log(json.items);
    setSearchResults(json.items);
  };

  return (
    <div>
      <h1 className="mb-3 font-semibold text-lg">Search results</h1>
      {searchResults &&
        searchResults.map((result) => (
          <Link to={"/watch?v=" + result.id.videoId}>
            <SearchResultCard key={result.id.videoId} data={result} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResultsPage;
