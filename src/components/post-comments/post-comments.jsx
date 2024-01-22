import PostContentBlock from '../content-block/content-block.jsx'
function PostComment({ comment, reply }) {
    return (<>
        <hr className="my-2 w-full"></hr>
        <li className={`comments--comment ${comment.mainComment ? 'grid justify-items-end' : ''
            }`}>
            <article className={`comment-card grid gap-2 grid-cols-[auto_1fr] p-4 hover:bg-accent-surface-1 rounded-lg  ${comment.mainComment ? 'w-4/5' : ''} max-w-full `}>
                <a className="w-10 h-10">
                    <picture>
                        <img
                            className="rounded-full w-10 h-10" decoding="async" loading="lazy" src={
                                !reply ? comment.commenter.commenterAvatar : comment.replier.replierAvatar
                            }
                            alt="Author avatar"
                        />

                    </picture>
                    <span className="sr-only">{!reply ? comment.commenter.name : comment.replier.name}</span>
                </a>

                <div className="comment--card grid gap-y-1 leading-tight"
                >

                    <div className="comments__comment__commenter flex gap-x-2 items-center text-fluid--1 text-text-4">
                        <a className="font-bold text-text-2 hover:underline">
                            {!reply ? comment.commenter.name : comment.replier.name}
                        </a>
                        <span>•</span>
                        <time className="text-fluid--2" dateTime={comment.publishedAt}>
                            {new Date(comment.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </time>
                    </div>

                    <PostContentBlock
                        type="comment"
                        children={comment.commentBody || comment.replyBody}
                    />
                    <div className="comment--card__action flex flex-row-reverse"
                    >
                        <a title="Permalink" class="w-10 h-10 grid place-items-center hover:bg-accent-surface-2 rounded-md text-text-2 hover:text-brand-stroke" href="https://ellyloel.com" target="_blank" rel="noopener noreferrer"><span class="sr-only">Permalink</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"></path></svg></a>

                        {!comment.mainComment && (<a className="comment--ctl w-20 h-10 flex gap-2 p-2 place-items-center hover:bg-accent-surface-2 rounded-md tex-text-2 hover:text-brand-stroke cursor-pointer">
                            <span className="sr-only">Reply to comment</span>
                            <span className="w-4 h-4">
                                <svg viewBox="0 0 16 16">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                                    />
                                </svg>
                            </span>
                            <span className="text-fluid--2">Reply</span>
                        </a>)}
                    </div>
                </div>
            </article>
        </li>
    </>)
}



function Comments({ comment, reply }) {
    const replies = comment && comment.replies?.length > 0;
    return (
        <ul className="">
            <PostComment key={comment.id} comment={comment} />
            {replies && comment.replies.map((reply) => <PostComment key={reply.id} comment={reply} reply />)}
        </ul>
    );
}

export default Comments;
