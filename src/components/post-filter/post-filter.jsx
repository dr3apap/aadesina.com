import React from 'react'
import { useState, useEffect } from 'react'
import PostLink from '../post-link/post-link'
import getFilteredPosts from './post-filter.js'

function PostFilter() {
    const [filterInput, setFilterInput] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    function handleFilter(e) {
        e.preventDefault();
        setFilterInput(e.target.value);
        e.target.value = '';
    }


    useEffect(() => {
        async function fetchFilteredPosts() {
            const posts = await getFilteredPosts(filterInput);
            posts && setFilteredPosts(posts);
        }
        fetchFilteredPosts();
    }, [filterInput]);

    return (
        <div className="search__field my-6 relative grid gap-y-3">
            <form className="search__label" id="post-filter" >
                <input
                    className="search__input block w-full p-6 border-2 border-solid border-surface-1 text-fluid--2 shadow-md"
                    type="text"
                    placeholder="Filter posts by tag: Ex javascript"
                    id="filter-input"
                    defautvalue={filterInput}
                    onBlur={handleFilter}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-6 right-4 sm:top-7"
                    width="24"
                    height="30"
                    viewBox="0 0 60 75"
                >
                    <path d="M54.205 52.51 37.756 36.062a18.21 18.21 0 0 0 4.62-12.132c0-10.086-8.205-18.291-18.29-18.291C14 5.639 5.795 13.844 5.795 23.93c0 10.085 8.205 18.289 18.291 18.289a18.21 18.21 0 0 0 11.797-4.328l16.471 16.471 1.851-1.852zM24.086 40.031c-8.879 0-16.102-7.224-16.102-16.102 0-8.879 7.223-16.103 16.102-16.103s16.102 7.224 16.102 16.103c0 8.879-7.223 16.102-16.102 16.102z" />
                </svg>
            </form>
            <ul className="grid gap-y-3">
                {filteredPosts && (filteredPosts.length > 0 && (filteredPosts.map((post) => (
                    <PostLink
                        key={post._id}
                        pubDate={post.publishedAt}
                        title={post.title}
                        url={`/posts/${post.slug.current}`}
                        category={post.category}
                    />
                ))) || filterInput.length > 0 && <p className="text-fluid--2 text-brand">Sorry, your search did not return any result please check back later for post(s) tag <span className="italic text-text-2">{filterInput}.</span></p>) ||
                    filterInput.length > 0 && <p className="text-fluid--2 text-red-800">Sorry, your search did not match any valid tag, kindly refine your search.</p>}
            </ul>
        </div>
    )
}
export default PostFilter
