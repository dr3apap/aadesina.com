import React from 'react'

function PostLink({ url, title, pubDate, numOfComment, tags, updated, category }) {
  return (
    <li
      className="search__item post text-text-1 drop-shadow-md mb-4 align-middle"
      data-search-term={category}
      data-search-tags=""
    >
      <div className="media grid grid-cols-[auto_2fr_auto] gap-4 items-center">
        <div className="media__details">
          <h3 className="text-fluid-1 text-brand">
            <a
              className="block w-full hover:underline underline-offset-2 decoration-brand decoration-2 cursor-pointer"
              href={url}
            >
              {title}
            </a>
          </h3>
          <div className="la:flex gap-8">
            <div className="text-center text-fluid-0 la:flex gap-2 uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
             <ul className="flex flex-wrap items-center">
              {tags &&
               tags.map((tag, index) => {
                  return (
                    <React.Fragment key={tag._id}>
                      <li>
                        <a
                          className="font-bold"
                          href={`/post/${tag.title.toLowerCase()}`}
                        >
                          {tag.title}
                        </a>
                        {index !== props.tags.length - 1 ? (
                          <span aria-hidden="true">,&nbsp;</span>
                        ) : (
                          ''
                        )}
                      </li>
                    </React.Fragment>
                  )
                })}
            </ul>
            </div>

            <div className="text-center text-fluid-0 flex gap-2">
              <time dateTime={pubDate}></time>
              {new Date(pubDate).toLocaleDateString('en-UK', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
              <time dateTime={updated && updated}>
                {updated &&
                  new Date(updated).toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
              </time>
            </div>
            <div className="text-center text-fluid-0 flex gap-8">
              <p className="posts__comment ml-1 text-fluid-0 uppercase align-middle">
                {/** Use a comment bank Icon*/}Comments
                <span className="inline-block pl-2">{numOfComment}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PostLink
