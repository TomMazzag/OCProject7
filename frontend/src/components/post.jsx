import "./post.css"
import { calculateTimeSincePost } from "./dateTimeLogic"

export const Post = ({post}) => {
    const time = calculateTimeSincePost(post.creation_date)

    return (
        <div className="post">
            <h3>{post.name}</h3>
            <p className="timestamp">{time} ago</p>
            <p>{post.message}</p>
        </div>
    )
}