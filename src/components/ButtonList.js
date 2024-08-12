import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Cricket",
    "Football",
    "Leetcode",
    "Data Structures",
    "Mixes",
    "Politics",
    "Software Engineering",
    "Travel",
    "Blogs",
    "fitness",
    "Travel",
    "Wwe"
  ];

  return (
    <div className="flex">
      {buttonNames.map((name) => {
        return <Button key={name} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
