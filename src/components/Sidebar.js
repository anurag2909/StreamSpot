import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className="p-3 shadow-lg w-48 border b-2">
      <ul>
        <li> Home</li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming </li>
        <li> Movies</li>
      </ul>

      <h1 className="font-bold pt-5"> Explore</h1>
      <ul>
        <li> Trending</li>
        <li> Shopping</li>
        <li> Courses</li>
        <li> Courses</li>
        <li> Music</li>
        <li> Movies</li>
        <li> Fashion & Beauty</li>
      </ul>

      <ul className="pt-5">
        <li> Settings</li>
        <li> Report History</li>
        <li> Help</li>
        <li> Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
