import React from 'react';
import PostLink from '../post-link/post-link';
function Category({ Icon, title, posts }) {
  return (
    <li className="post-categories bg-surface-1 drop-drop-shadow p-3 flex-grow sm:basis-[45%] rounded-md">
      <input
        className="post-categories__ctl absolute opacity-0"
        type="radio"
        name="posts-ctl"
        id={title}
        value={title}
      />
      <label
        className="posts-categories__label relative cursor-pointer mb-4"
        htmlFor={title}
      >
        <div className="flex flex-col items-center justify-items-center gap-y-2">
            <span className="w-20 h-20"><Icon/></span>
            <span className="block text-fluid--2 sm:text-fluid--1 uppercase text-text-1">{title}</span>
        </div>
      </label>
      <ul className="posts__render hidden">
        {posts.map((post) => (
          <PostLink
          ket={post._id}
           pubDate={post.publishedAt}
            title={post.title}
            url={`/posts/${post.slug.current}`}
            tags={post.tags}
            numOfComment={post.numOfComment}
            updated={post.updatedAt}
            category={post.category}
          />
        ))}
      </ul>
    </li>
  )
}
export default Category
