import React from 'react';
function BlogHeader({quote, quoteCite, ...props}){
    return( 
        <header className="w-feature max-w-full mx-auto mt-4">
      <div className="w-full aspect-[3/1] bg-surface-4">
        {/* Gets funky here... If there's a demo, do that. Else do an image */}
        {props?.heroImageSrc && (
          <img
            width="750"
            height="250"
            className="w-full h-full"
            src={props.heroImageSrc}
            alt="Nasa Image"
          />
        )}
        {props?.hero?.demo && (
          <iframe
            title="Result demo for this post"
            className="w-full h-full"
            loading="lazy"
            src={props.hero.demo}
          ></iframe>
        )}
      </div>
      <div className="max-w-screen-md mx-auto grid gap-2 px-10 mb-14">
        <div className="relative flex justify-end items-center min-h-half-avatar py-6">
          <img
            className="absolute top-0 transform -translate-y-1/2 left-0 rounded-full bg-surface-4 aspect-square border-4 border-text-1 p-2"
            src="./asset/dr3-no-background-2.png"
            alt="Adebola Adesina"
            width="100"
            height="100"
          />
          <a
            href="https://twitter.com/intent/follow?screen_name=Dr3_147"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline border-transparent focus:border-text-1 outline-transparent focus-visible:border-text-1 hover:border-text-1 border-4 rounded-full text-fluid-1 flex gap-x-2 items-center text-white bg-brand px-3 py-1"
          >
            <span className="font-bold">Follow</span>
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
                 {/* {quote.length > 0 && <figure className="absolute left-0 bottom-0 transform translate-y-[50%] bg-surface-2 p-4 pt-8 whitespace-normal w-[50%] max-w-full opacity-70">
                <blockquote cite="" className=""><p className="circular-text quote text-fluid-0 text-text-1-accent">{quote}</p></blockquote>
                <figcaption className="text-fluid--1 text-brand-stroke">{quoteCite}<cite></cite></figcaption>
                </figure>} */}
        </div>
   
   </div> 
</header>);

    
}

export default BlogHeader;