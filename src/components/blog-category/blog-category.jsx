import React from 'react';
import PostLink from '../post-link/post-link';
function Category({ Icon, title, posts }) {
  return (
    <li className="post-categories bg-surface-1 cursor-pointer drop-drop-shadow mb-4  p-3 flex-grow basis-[30%] rounded-md">
      <input
        className="post-categories__ctl absolute opacity-0"
        type="radio"
        name="posts-ctl"
        id={title}
        value={title}
      />
      <label
        className="posts-categories__label relative text-fluid--0 text-text-1 uppercase"
        htmlFor={title}
      >
        <span className="flex items-center gap-x-4 w-full h-full">
            <Icon/>
            <span class="block">{title}</span>
        </span>
      </label>
      <ul className="hidden posts__render">
        {posts.map((post) => (
          <PostLink
            pubDate={post?.publishedAt}
            updated={posts?.updated}
            title={posts?.title}
            category={posts?.category}
            numOfComment={posts?.numOfComment}
            url={posts?.url}
          />
        ))}
      </ul>
    </li>
  )
}
export default Category
