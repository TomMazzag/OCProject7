export const Post = ({post}) => {
    return (
        <div className="post">
            <h3>Post by {post.full_name}</h3>
            <p>{post.message}</p>
        </div>
    )
}