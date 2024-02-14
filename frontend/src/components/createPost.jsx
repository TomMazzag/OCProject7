import { useState, useRef, useEffect } from "react";
import "./createPost.css";
import { addNewPost } from "../services/post";

export const CreatePost = ({ userId }) => {
    const [post, setPost] = useState("")
    const token = window.localStorage.getItem("token")

    const textAreaRef = useRef(null)
    useEffect(() => {
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }, [post])

    const handleSubmit = async () => {
        try{
            await addNewPost(token, post)
            setPost("")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="create-post">
            <h2>New post</h2>
            <div className="create-post-user-input">
                <textarea
                    className="post-input"
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    rows={1}
                    ref={textAreaRef}
                    onKeyDown={(e) => {
                        if (e && e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (post.trim() !== "") {
                                handleSubmit(e);
                            }
                        }
                    }}
                ></textarea>
                <button className="add-post-button">Add post</button>
            </div>
        </div>
    );
};
