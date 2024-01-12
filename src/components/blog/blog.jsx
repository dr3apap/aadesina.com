import React from 'react'
import ContentBlock from '../content-block/content-block'
import PostFilter from '../post-filter/post-filter.jsx'

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
})


const getShortDate = (stamp) => shortDateFormatter.format(new Date(stamp))

export function PostLink({ title, ...posts }) {
    return (
        <ul className="posts__render mt-3">
            <h3 className="text-flud--1 uppercase text-text-1">{title}</h3>
            {posts.selection.map((post) => {
                const postUrl = 'aadesina.com'.toUpperCase()
                return <li
                    className="mb-2" key={post?._id}
                >
                    <a
                        className="leading-tight decoration-4 decoration-brand text-brand"
                        href={`/posts/${post?.slug.current}`}
                    >
                        {post?.title}
                    </a>
                    <p className="text-fluid--2">
                        {`${post && postUrl} - ${getShortDate(post?.publishedAt)}`}
                    </p>

                </li>
            })}
        </ul>)

}


const postsByCategory = ["FrontEnd", "BackEnd", "Iot", "OperatingSystem", "GameDesign", "SystemDesign", "Tools"]

export default function Blog({ postCategories, ...props }) {
    const posts = postsByCategory.filter((category) => !!postCategories.data[category]
    )
    const mapPost = posts.map((category) => postCategories.data[category])
    return <div className="px-4">
        <form
            className="grid justify-center gap-y-4 mb-4 py-4 px-2 text-center"
            id="subscription"
            action=""
            method="POST"
        >
            <p>
                Keep up to date with events like new posts and my latest adventures!
            </p>
            <div className="flex">
                <input
                    type="text"
                    name="emailAdress"
                    id="emailAdress"
                    className="p-2 px-4 flex-grow rounded-l-full"
                    placeholder="Email Address"
                    aria-label="Email Address"
                />
                <button className="font-bold rounded-r-full bg-accent hover:no-underline focus:border-brand focus-visible:border-brand hover:border-brand border-4 text-fluid--1 text-white border-transparent outline-transparent flex gap-x-1 place-items-center px-3 py-1" type="submit">Subscribe!</button>
            </div>
            <p className="text-fluid--2 text-center text-text-2">No spam! Unsubscribe antyime</p>

        </form>

        <ContentBlock type='blog' children={postCategories.data.blogHeading} />
        <ContentBlock type='blog' children={postCategories.data.blogIntro} />
        <div className="w-full flex justify-end">
            <span className="flex gap-x-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
                <span>
                    <a className="font-bold text-brand decoration-4 decoration-brand" href="/blog">
                        permalink
                    </a>
                </span>
            </span>
        </div>
        <PostFilter />
        {mapPost.map((selection) => <PostLink key={selection.title} {...selection} />)}
    </div>
}
