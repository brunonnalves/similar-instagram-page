import { ChangeEvent, KeyboardEvent, useState } from "react";
import { CommentBar, CommentButton, CommentContainer, CommentInput, CommentsContainer } from "./styles";

export interface IcommentsList {
    key: number,
    user: string;
    comment: string;
}

const CommentsList = () => {
    const [commentsList, setCommentList] = useState<IcommentsList[]>([
        {
            key: 0,
            user: "Lucas Credie",
            comment: "dolor sit amet, consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et tristique proin. Mi enim ut eu cras ultrices eget et tristique proin.",
        }
    ]);

    const [inputText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inputText !== "") {
            handleAddComment();
        }
    };

    const handleAddComment = () => {
        if (inputText !== "") {
            let newCommentsList = [...commentsList];
            newCommentsList.push({
                key: commentsList.length + 1,
                user: "Comment",
                comment: inputText,
            });
            setCommentList(newCommentsList);
            setInputText("");
        }
    };

    return (
        <>
            <CommentsContainer>
                {commentsList.map((item) => (
                    <CommentContainer key={item.key}>
                        <span style={{ fontWeight: "600" }} >{item.user}</span> {item.comment}
                    </CommentContainer>
                ))}
            </CommentsContainer >
            <CommentBar>
                <CommentInput
                    id="comment"
                    type="text"
                    value={inputText}
                    placeholder="Add a comment here"
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
                <CommentButton onClick={handleAddComment}>Post</CommentButton>
            </CommentBar>
        </>
    );
};

export default CommentsList;