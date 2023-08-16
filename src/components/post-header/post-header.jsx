import React from 'react'

const getReadingTime = (content) => {
  const WPM = 350
  let result = {}
  const regex = /\w+/g
  result.wordCount = content.match(regex).length
  result.readingTime = Math.ceil(result.wordCount / WPM)
  return result
}

const formatter = new Intl.DateTimeFormat('en-UK', {
  year: 'numeric',
  day: 'numeric',
  month: 'short',
})

const LayoutHeader = ({ sharelink, heroImageSrc, ...props }) => {
  const readingTime = getReadingTime(props.body)
  const publishedAt = formatter.format(new Date(props.publishedAt))
  const updatedAt = formatter.format(
    new Date(props.updatedAt || props.publishedAt)
  );
  const demo = props?.hero?.demo;
  
  return (
    <header className="max-w-screen-full mx-auto">
      <div className="w-full aspect-[3/1] bg-surface-4">
        {/* Gets funky here... If there's a demo, do that. Else do an image */}
        
          <img
            width="750"
            height="250"
            className="w-full h-full"
            src={!demo && heroImageSrc}
            alt="Nasa Image"
          />
        
        {demo && (
          <iframe
            title="Result demo for this post"
            className="w-full h-full"
            loading="lazy"
            src={props?.hero?.demo}
          ></iframe>
        )}
      </div>
      <div className="max-w-screen-md  mx-auto grid gap-2 px-10 mb-14">
        <div className="relative flex justify-end items-center min-h-half-avatar py-2">
          <img
            className="absolute top-0 transform -translate-y-1/2 left-0 rounded-full bg-surface-4 aspect-square  border-4 border-text-1"
            src={props.author.avatar}
            alt={props.author.name}
            width="100"
            height="100"
          />
          <a
            href={sharelink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline border-transparent focus:border-text-1 outline-transparent focus-visible:border-text-1 hover:border-text-1 border-4 rounded-full text-fluid-1 flex gap-x-2 items-center text-white bg-brand px-4 py-1"
          >
            <span className="font-bold">Share</span>
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>Twitter icon</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
          </a>
        </div>
        <h1 className="text-fluid-4 font-bold relative">
        {props.title}
        <span className="w-20 h-20 absolute left-2 top-2 -translate-x-[50%] -translate-y-[50%] hover:bg-accent flex items-center justify-center">
            {/* Svg for pencil writing*/}
        </span>
        </h1>
        <h2 className="text-fluid-1 text-text-3 flex gap-x-3 items-center mb-2 mt-[-1rem]">
          <span>{`${props.author.name}`}</span>
          {props.author.verified && (
            <span className="w-5 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.001 512.001"><path d="M14.675 442.983c-19.567-19.567-19.567-51.29 0-70.857l192.887-192.887 70.857 70.857L85.532 442.983c-19.567 19.567-51.29 19.567-70.857 0z" style={{fill:"#95673f"}}/><path d="M14.675 442.983c19.567 19.567 51.29 19.567 70.857 0l192.887-192.887-35.429-35.429L14.675 442.983z" style={{fill:"#875334"}}/><path d="m341.404 187.113-70.857-70.857 47.237-47.237c19.567-19.567 51.29-19.567 70.857 0s19.567 51.29 0 70.857l-47.237 47.237z" style={{fill:"#95673f"}}/><path d="m341.404 187.113 47.237-47.237c19.567-19.567 19.567-51.29 0-70.857l-82.666 82.666 35.429 35.428z" style={{fill:"#875334"}}/><path d="M511.145 203.804c3.7-11.259-5.118-22.281-16.455-21.966-51.804 1.889-108.883-21.965-149.036-62.118l-51.095-51.095c-6.536-6.536-17.163-6.456-23.619 0L176.465 163.1c-6.535 6.535-6.536 17.084 0 23.619l51.095 51.095c40.153 40.153 63.849 97.231 62.039 149.114-.315 11.652 11.022 20.155 22.044 16.376 93.689-31.177 168.246-105.734 199.502-199.5z" style={{fill:"#ff5023"}}/><path d="M311.645 403.304c-11.023 3.779-22.359-4.724-22.044-16.376 1.81-51.884-21.886-108.961-62.039-149.114l-3.858-3.858 118.093-118.095 3.858 3.858c40.153 40.153 97.231 64.006 149.036 62.118 11.337-.315 20.155 10.706 16.455 21.966-31.257 93.767-105.814 168.324-199.501 199.501z" style={{fill:"#cd2a00"}}/><path d="M342.432 296.413c-5.725-7.23-4.501-17.734 2.735-23.458a217.424 217.424 0 0 0 35.637-35.652c5.725-7.242 16.222-8.46 23.458-2.746 7.236 5.72 8.465 16.222 2.746 23.458a250.768 250.768 0 0 1-41.117 41.132c-7.224 5.714-17.725 4.522-23.459-2.734z" style={{fill:"#a5412c"}}/></svg>
                </span>
          )}
        </h2>
        {/* Details */}
        <span className="flex gap-x-4 items-center text-fluid-1 flex-wrap text-text-4">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
              <path
                fillRule="evenodd"
                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Published</span>
            <time>{`${publishedAt}`}</time>
          </span>
          {publishedAt !== updatedAt && (
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Updated</span>
              <time>{`${updatedAt}`}</time>
            </span>
          )}
          <span className="flex items-center gap-1">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              <span className="sr-only">Time to read</span>
              {`~${readingTime.readingTime} min`}
            </span>
          </span>
          <span className="flex items-center gap-1">
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
              {props.tags &&
                props.tags.map((tag, index) => {
                  return (
                    <React.Fragment key={tag._id}>
                      <li>
                        <a
                          className="font-bold"
                          href={`/blog/${tag.title.toLowerCase()}`}
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
          </span>
        </span>
      </div>
    </header>
  )
}

export default LayoutHeader