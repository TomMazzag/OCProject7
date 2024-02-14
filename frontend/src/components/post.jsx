import "./post.css"

export const Post = ({post}) => {
    return (
        <div className="post">
            <h3>{post.full_name}</h3>
            <p className="timestamp">5h ago</p>
            <p>{post.message}</p>
        </div>
    )
}