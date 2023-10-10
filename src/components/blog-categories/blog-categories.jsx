import React from 'react'
import BlogCategory from '../blog-category/blog-category'
import catIcons from './categories-icon.jsx'

function BlogCategories({ posts }) {
  return (
      <div className="my-6">
        <h2 className="text-fluid-2 la:text-fluid-3 text-text-2-accent mb-2 uppercase tracking-wide">
          Categories
        </h2>
         <p>Here are some of my thougts; exploration; observations and discovery. I hope the readers find informations and ideas that can be transform to reasonings of their own</p>
        <ul
          className="posts flex shrink-0  items-center justify-items-center flex-wrap gap-2 bg-surface-2 drop-shadow-md rounded-md my-6"
          id="search-posts"
        >
          {Object.keys(catIcons).map((key, index) => {
            return (
              <BlogCategory
                key={`${index}-${key}`}
                title={key}
               Icon={catIcons[key]}
                posts={posts.length > 0 ? posts.filter((post) => post.category.name == key) : []}
              />
            )
          })}
        </ul>
      </div>
  )
}
export default BlogCategories
