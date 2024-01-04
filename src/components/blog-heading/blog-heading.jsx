import React from 'react'
import BlogHeadingBlock from '../../components/content-block/content-block'
function BlogHeading({ children }) {
    return (
        <div className="my-6">
            <BlogHeaingBlock type='blBlogCatergoriesogHeading' children={children} />
        </div>
    )
}
export default BlogHeading
