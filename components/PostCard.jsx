import React from "react";

export const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg p-0 lg:p-8 p-12 bm-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg ronded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  );
};
