import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  window.scrollTo(0,0);

  return (
    <div className="flex shadow-sm p-2 background bg-gray-200 rounded-lg my-2">
      <img
        className="h-9 w-9"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-2">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
