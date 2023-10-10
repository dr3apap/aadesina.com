import PostContentBlock from '../content-block/content-block'
function PostComment({ comment }) {
  return (
    <>
      <hr className="my-2 w-full"></hr>
      <li className="comments--comment">
        <div className="comments__comment__commenter grid grid-cols-[auto_1fr] gap-x-4">
          <div className="">
            <img
              className="w-11 h-11 rounded-full text-text-1 text-fluid--2"
              src={
                comment.commenter.commenterAvatar || comment.commenter.avatar
              }
              alt={`Avatar of ${comment.commenter.name}`}
            />
          </div>

          <div className="">
            <h2 className="font-bold text-fluid--1 m-0 mb-[-5px] p-0">
              {comment.commenter.name}
            </h2>
            <span className="text-fluid--2">
              <time dateTime={comment.publishedAt}>
                {new Date(comment.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </span>
          </div>
        </div>
        <div
          className={`grid grid-rows-[1fr_auto] gap-2 bg-surface-1-accent rounded-md mt-2 p-4 drop-shadow-md ${
            comment.type.toLowerCase() === 'reply' ? 'ml-14' : ''
          }`}
        >
          <PostContentBlock
            type="comment"
            children={comment.commentBody || comment.replyBody}
          />
          {comment.type.toLowerCase() === 'main' && (
            <button className="comment--ctl justify-self-end flex gap-2 items-center justify-center cursor-pointer">
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
            </button>
          )}
        </div>
      </li>
    </>
  )
}
export default PostComment
