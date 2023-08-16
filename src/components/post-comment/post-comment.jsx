import PostContentBlock from '../post-content/PostContentBlock'
function PostComment({comment}){
return (<li className="comments__comment">
  <div className="comments__comment__commenter grid grid-cols-[auto_1fr] gap-4">
    <div className="">
      <img
        className="w-14 h-14 rounded-full"
        src={comment.commenter.commenterAvatar}
        alt={`Head shot for ${comment.commenter.name}`}
      />
    </div>

    <div className="">
      <h2 className="font-bold text-fluid-1 m-0 p-0">{comment.commenter.name}</h2>
      <p className="mt-[-3px] p-0"><time datetime={comment.publishedAt}>{
          new Date(comment.publishedAt).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        }</time></p>
    </div>
  </div>
  <div className="grid grid-rows-[1fr_auto] gap-4 bg-surface-1-accent rounded-md mt-4 p-8 drop-shadow-md">
    <PostContentBlock type="" children={comment.commentBody} />
    <p className="justify-self-end flex gap-2 text-center cursor-pointer"><svg width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg><span className="pt-1 cursor-pointer">Reply</span></p>
  </div>
</li>);
}
export default PostComment;