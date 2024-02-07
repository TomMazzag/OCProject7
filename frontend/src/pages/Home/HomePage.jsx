import { Navbar } from "../../components/navbar"
import { Post } from "../../components/post"
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
                    <li>General</li>
                </ul>
               </div>
               <div className="feed">
                <h2>My Feed</h2>
                <Post post={{full_name: "TomMazzag", message: "This is a new post"}} key={{id: 5123}}/>
               </div>
            </div>
        </>
    )
}