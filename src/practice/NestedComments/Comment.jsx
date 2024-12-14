import { useState } from "react";

const Comment = ({comment, addReply}) => {

    const [showChildCommentInput, setShowChildCommentInput] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [replyComment, setReplyComment] = useState("");

    return (
        <div>
            <div className="commentBox">
                <div>{comment?.value} : {comment?.id}</div>
                <div className="btnsComment">
                    <input type="button" value="Comment" onClick={() => setShowChildCommentInput(!showChildCommentInput)}/>
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" />
                    {
                        comment?.children?.length > 0 && 
                        <input 
                            type="button" 
                            value={`${comment?.children?.length} Replies`} 
                            onClick={() => setShowReplies(!showReplies)} 
                        />
                    }
                </div>
                {
                    showChildCommentInput > 0 && 
                    <div className="flx">
                        <textarea value={replyComment} onChange={(e) => setReplyComment(e.target.value)} />
                        <input type="button" value="Reply" onClick={() => addReply(comment?.id, replyComment)} />
                    </div>
                }
                {
                    comment?.children?.length > 0 && 
                    comment?.children?.map(child => {
                        return <Comment comment={child} addReply={addReply}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Comment;