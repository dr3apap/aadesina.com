import React from 'react'
import BlogCategory from '../blog-category/blog-category'
import catIcons from './categories-icon.jsx'

function BlogCategories({ posts }) {
  return (
    <fieldset className="search" data-search-id="posts">
      <div className="">
        <h2 className="text-fluid-2 la:text-fluid-3 text-text-2-accent mb-6 uppercase tracking-widest">
          Categories
        </h2>
        <ul
          className="posts flex items-center justify-items-center flex-wrap gap-2 bg-surface-2 drop-shadow-md rounded-md"
          id="search-posts"
        >
          {Object.keys(catIcons).map((key) => {
            return (
              <BlogCategory
                key={key}
                title={key}
               Icon={catIcons[key]}
                posts={posts.length > 0 ? posts : []}
              />
            )
          })}
        </ul>
        <div className="search__field mt-16 relative">
          <label className="search__label" htmlFor="search-posts hide"></label>
          <input
            className="search__input block w-full p-6 border-2 border-solid border-surface-1 text-fluid-1 shadow-md"
            type="text"
            placeholder="Filter posts"
            id="search-posts"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-5 right-4" width="24" height="30" viewBox="0 0 60 75"><path d="M54.205 52.51 37.756 36.062a18.21 18.21 0 0 0 4.62-12.132c0-10.086-8.205-18.291-18.29-18.291C14 5.639 5.795 13.844 5.795 23.93c0 10.085 8.205 18.289 18.291 18.289a18.21 18.21 0 0 0 11.797-4.328l16.471 16.471 1.851-1.852zM24.086 40.031c-8.879 0-16.102-7.224-16.102-16.102 0-8.879 7.223-16.103 16.102-16.103s16.102 7.224 16.102 16.103c0 8.879-7.223 16.102-16.102 16.102z"/></svg>
        </div>
      </div>
    </fieldset>
  )
}
export default BlogCategories
