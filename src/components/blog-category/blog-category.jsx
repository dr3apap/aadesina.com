import React, { useState } from 'react';
import PostLink from '../post-link/post-link';

function Category({ title, ...posts }) {
    {
        posts.length > 0 && (<ul className="posts__render mt-3">
            <h3 className="text-fluid--1 uppercase text-text-1">{title}</h3>
            {Pposts.map((post) => {
                return <PostLink
                    key={post._id}
                    pubDate={post.publishedAt}
                    title={post.title}
                    url={`/posts/${post.slug.current}`}
                    category={title} />
            })}
        </ul>)
    }

}
export default Category
