import React, { useState } from 'react';
import PostLink from '../post-link/post-link';
function Category({ Icon, title, posts }) {
  const [inputChecked, setInputCheck] = useState(true);
  
    function handleCheck(e){
      if (e.target.checked){
       setInputCheck(!inputChecked);
       e.target.checked = inputChecked;
      } 

      setInputCheck(!inputChecked);
         
    }
  return (
    <li className="post-categories bg-surface-1 drop-drop-shadow p-3 flex-grow rounded-md w-[45%]">
      <input
        className="post-categories__ctl absolute opacity-0"
        type="radio"
        name="posts-ctl"
        id={title}
        value={title}
        onClick={handleCheck}
      />
      <label
        className="posts-categories__label relative cursor-pointer mb-4"
        htmlFor={title}
      >
        <div className="grid place-items-center gap-2">
            <span className="w-20 h-20"><Icon/></span>
            <h3 className="text-fluid--1 uppercase text-text-1">{title}</h3>
        </div>
      </label>
      <ul className="posts__render hidden mt-3">
        { posts.length > 0 && posts.map((post) => {
          return <PostLink
           key={post._id}
           pubDate={post.publishedAt}
            title={post.title}
            url={`/posts/${post.slug.current}`}
            category={post.category.name}
          />
        }) || <p className="text-fluid--2 text-brand">Sorry! there is no Post in <span className="italic text-text-2">{title}</span> yet, please check back later.</p>}

      </ul>
    </li>
  )
}
export default Category
