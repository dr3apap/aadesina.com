import PostComment from '../post-comment/post-comment';

function Comments({ comment }) {
    const replies = comment && comment.replies?.length > 0;
    return (
        <ul className="bg-surface-2">
            <PostComment key={comment.id} comment={comment} />
            {replies && comment.replies.map((reply) => <PostComment key={reply.id} comment={reply} reply />)}
        </ul>
    );
}

export default Comments;
