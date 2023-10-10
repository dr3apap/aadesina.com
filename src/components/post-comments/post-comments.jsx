import PostComment from '../post-comment/post-comment';

function Comments({comment}){
    console.log(comment);
    const reply  = comment.reply.length > 0 && comment.reply;
    return (
        <ul className="bg-surface-2">
          <PostComment key={comment.id} comment={comment}/> 
          {reply && reply.map((reply) => <PostComment key={reply.id} comment={reply}/>)} 
        </ul>
    );
}

export default Comments;