import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

export const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
                <img src={post.featuredImage.url} width='60px' height='60px' alt={post.title}  className='align-middle rounded-full'/>
            </div>
            <div className='flex-grow ml-4'>
                
                <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                  <span className='font-semibold'>
                    {post.title}

                  </span>
                </Link>
                <p className='text-gray-500 font-xs'>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </p>
            </div>
        </div>
      ))}
    </div>
  );
};
