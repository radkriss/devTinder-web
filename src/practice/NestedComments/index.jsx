import { useState } from "react"
import "./style.css"
import Comment from "./Comment";

// let commentsData = [{
//     id: 1,
//     value: "Comment 1",
//     children: [{
//         id: 2,
//         value: "Child Comment 1"
//     },{
//         id: 3,
//         value: "Child Comment 2"
//     }]
// }]


const NestedComments = () => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onInputChange = (e) => {
        setComment(e.target.value);
    }

    function generateRandomId(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addComment = () => {
        if (comment !== "") {
            const randomId = generateRandomId(1000, 9999);
            setComments([...comments, {
                id: randomId,
                value: comment,
                children: []
            }]);
            setComment("");
        }
    }

    const insertNode = (comments, commentID, newcomment) => {
        return comments.map(com => {
            if (com.id === commentID) {
                return {
                    ...com,
                    children: [{...newcomment}, ...com.children]
                }
            } else if (com?.children?.length > 0){
                return {
                    ...com,
                    children: insertNode(com.children, commentID, newcomment)
                }
            } else {
                return com
            }
        })
    }

    const addReply = (commentID, reply) => {
        if (reply.length > 0) {
            const newcomment = {
                id: generateRandomId(1000, 9999),
                value: reply,
                children: []
            }
            const newlist = insertNode(comments, commentID, newcomment);
            setComments(newlist);
        }
    }

    const childCommentAdd = (value, ) => {

    }

    return (
        <div>
            <div className="flx">
                <textarea value={comment} onChange={onInputChange} />
                <input type="button" onClick={addComment} value="Add Comment" />
            </div>
            {
                comments && comments.length > 0 && 
                comments.map((comment, index) => {
                    return (
                    <Comment key={comment.id} comment={comment} addReply={addReply} />
                    
                )})
            }
        </div>
    )
}

export default NestedComments;