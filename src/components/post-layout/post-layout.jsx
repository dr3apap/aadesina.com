import PostHeader from '../post-header/post-header'
import BlogComments from '../post-comments/post-comments'
import BlogCommentForm from '../post-comment-form/comment-form'
import PostContentBlock from '../content-block/content-block.jsx'

function PostLayout({ heroData, sharelink, ...props }) {
    return (
        <>
            <PostHeader
                heroData={heroData}
                sharelink={sharelink}
                {...props}
            />
            <main className="w-article max-w-full grid gap-y-6 mx-auto leading-[1.5]">
                <PostContentBlock type="article" children={props?.body} />
                {props.siteConfig?.footer && (
                    <aside className="relative my-12 rounded-lg bg-surface-2-accent text-text-2 p-8 leading-tight gap-2 text-fluid--1 grid place-items-center">
                        <span className="absolute top-0 left-0 p-2 bg-surface-1-accent rounded-md -translate-x-1/4 border-2 border-surface-1 -translate-y-1/4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                                />
                            </svg>
                        </span>
                        <PostContentBlock type="footer">
                            {props.siteConfig?.posts?.footer}
                        </PostContentBlock>
                    </aside>
                )}
                <h3 className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mt-8 font-bold text-fluid-1 before:block before:h-4 before:bg-gradient-to-r before:from-accent before:to-brand after:block after:h-4 after:bg-gradient-to-l after:from-accent after:to-brand">
                    Reader Comments
                </h3>


                <div className="comments grid border-2 p-4 gap-y-6 w-full">
                    <ul className="">
                        {props.comments?.length > 0 &&
                            props.comments.map((comment) => (
                                <BlogComments key={comment.id} comment={comment} />
                            ))}
                    </ul>
                    <BlogCommentForm />
                </div>

            </main>
        </>
    )
}
export default PostLayout
