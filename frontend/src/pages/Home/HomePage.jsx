import { Navbar } from "../../components/navbar"
import { Post } from "../../components/post"
import { CreatePost } from "../../components/createPost"
import "./HomePage.css"

export const HomePage = () => {
    

    return (
        <>
            <Navbar />
            <h1 className="home-page-heading">Welcome</h1>

            <div className="content">
                <div className="topics">
                    <h2>Followed Topics</h2>
                    <ul>
                        <li>
                            <a href="">General</a>
                        </li>
                    </ul>
                </div>
                <div className="feed">
                    <h2>My Feed</h2>
                    <div className="feed-posts">
                        <CreatePost />
                        <Post
                            post={{
                                full_name: "Tom Mazzag",
                                message: "This is a new post",
                            }}
                            key={{ id: 5123 }}
                        />
                        <Post
                            post={{
                                full_name: "Tom Mazzag",
                                message: "This is a new post",
                            }}
                            key={{ id: 5123 }}
                        />
                    </div>
                </div>
                <div className="news">
                    <h2>Company News</h2>
                </div>
            </div>
        </>
    );
}