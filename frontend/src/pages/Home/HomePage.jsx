import { Navbar } from "../../components/navbar"
import { Post } from "../../components/post"
import { CreatePost } from "../../components/createPost"
import "./HomePage.css"
import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/post"
import { useNavigate } from "react-router-dom"
import { CompanyNews } from "../../components/companyNews"
import handshake from "../../assets/handshake.jpg"
import buildings from "../../assets/buildings.jpg"

export const HomePage = () => {
    const token = window.localStorage.getItem("token")
    const [posts, setPosts] = useState([])
    const [postUpdate, setPostUpdate] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
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
                        <a href="">
                            <li>General</li>
                        </a>
                        <a href="">
                            <li>Work</li>
                        </a>
                        <a href="">
                            <li>Software Dev</li>
                        </a>
                        <a href="">
                            <li>My team</li>
                        </a>
                    </ul>
                </div>
                <div className="feed">
                    <h2>My Feed</h2>
                    <div className="feed-posts">
                        <CreatePost setPostUpdate={setPostUpdate} />
                        {[...posts].map((post) => (
                            <Post post={post} key={post.postID} />
                        ))}
                    </div>
                </div>
                <div className="news">
                    <h2>Company News</h2>
                    <div className="news-feed">
                        <CompanyNews
                            title="Groupomania annouces a new merger"
                            image={buildings}
                            description="Groupomania announces a transformative merger with Tech Innovator, marking a pivotal moment in the company's evolution, as it harnesses cutting-edge technology and expertise to redefine industry standards and drive unparalleled growth, reinforcing its commitment to innovation and delivering exceptional value to customers worldwide."
                        />
                        <CompanyNews
                            title="Recent promotions"
                            image={handshake}
                            description="Groupomania recognizes and celebrates the exceptional achievements of its staff members with a series of well-deserved promotions. These individuals have showcased remarkable talent and dedication, embodying Groupomania's commitment to fostering growth and excellence within its workforce."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}