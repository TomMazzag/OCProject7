import { Navbar } from "../../components/navbar"
import { Post } from "../../components/post"
import { CreatePost } from "../../components/createPost"
import "./HomePage.css"
import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/post"

export const HomePage = () => {
    const token = window.localStorage.getItem("token")
    const [posts, setPosts] = useState([])
    const [postUpdate, setPostUpdate] = useState(false)

    useEffect(() => {
        getAllPosts(token)
        .then((data) => {
            setPosts(data.posts)
            setPostUpdate(false)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [token, postUpdate])

    return (
        <>
            <Navbar />
            <h1 className="home-page-heading">Welcome</h1>

            <div className="content">
                <div className="topics">
                    <h2>Followed Topics</h2>
                    <ul>
                        <a href=""><li>General</li></a>
                        <a href=""><li>Work</li></a>
                        <a href=""><li>Software Dev</li></a>
                        <a href=""><li>My team</li></a>
                    </ul>
                </div>
                <div className="feed">
                    <h2>My Feed</h2>
                    <div className="feed-posts">
                        <CreatePost setPostUpdate={setPostUpdate}/>
                        {[...posts].map((post) => (
                            <Post post={post} key={post.postID}/>
                        ))}
                    </div>
                </div>
                <div className="news">
                    <h2>Company News</h2>
                </div>
            </div>
        </>
    );
}