import React from "react";

const Comment = ({ data }) => {
  if (!data) return null;

  const { name, text } = data;

  return (
    <div className="flex">
      <img
        className="h-10 w-10"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
