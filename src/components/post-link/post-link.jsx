import React from 'react'

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
})

const getShortDate = (stamp) => shortDateFormatter.format(new Date(stamp))

function PostLink({ url, title, pubDate, category}) {
  return(
    <li
      className="mb-2" 
    >
            <a
              className="leading-tight decoration-4 decoration-brand text-brand"
              href={url}
            >
              {title}
            </a>
            <p className="text-fluid--2">
              <span className="px-2">{category.name?.toUpperCase()}</span>
              {getShortDate(pubDate)}
            </p>
       
    </li>
  )
}

export default PostLink
