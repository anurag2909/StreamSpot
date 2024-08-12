import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-3 shadow-lg w-60 bg-white border-r">
      <ul>
        <Link to="/" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🏠</span>
          <li className="text-sm">Home</li>
        </Link>
        <Link to="/shorts" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">📺</span>
          <li className="text-sm">Shorts</li>
        </Link>
        <Link to="/subscriptions" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🛎️</span>
          <li className="text-sm">Subscriptions</li>
        </Link>
      </ul>

      <hr className="my-4" />

      <ul>
        <Link to="/library" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">📚</span>
          <li className="text-sm">Library</li>
        </Link>
        <Link to="/history" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🕒</span>
          <li className="text-sm">History</li>
        </Link>
        <Link to="/your-videos" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎥</span>
          <li className="text-sm">Your videos</li>
        </Link>
        <Link to="/watch-later" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">⏲️</span>
          <li className="text-sm">Watch later</li>
        </Link>
        <Link to="/liked-videos" className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">👍</span>
          <li className="text-sm">Liked videos</li>
        </Link>
      </ul>

      <hr className="my-4" />

      <h1 className="font-bold text-sm py-2">Subscriptions</h1>
      <ul>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎵</span>
          <span className="text-sm">Music</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">⚽</span>
          <span className="text-sm">Sports</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎮</span>
          <span className="text-sm">Gaming</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎬</span>
          <span className="text-sm">Movies</span>
        </li>
      </ul>

      <hr className="my-4" />

      <h1 className="font-bold text-sm py-2">Explore</h1>
      <ul>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🔥</span>
          <span className="text-sm">Trending</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🛒</span>
          <span className="text-sm">Shopping</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">📚</span>
          <span className="text-sm">Learning</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎼</span>
          <span className="text-sm">Music</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🎬</span>
          <span className="text-sm">Movies</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">💄</span>
          <span className="text-sm">Fashion & Beauty</span>
        </li>
      </ul>

      <hr className="my-4" />

      <ul>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">⚙️</span>
          <span className="text-sm">Settings</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">🧾</span>
          <span className="text-sm">Report History</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">❓</span>
          <span className="text-sm">Help</span>
        </li>
        <li className="flex items-center py-2 hover:bg-gray-300 rounded-lg">
          <span className="text-xl mr-4">💬</span>
          <span className="text-sm">Feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
