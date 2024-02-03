import { Navbar } from "../../components/navbar"
import "./HomePage.css"

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="content">
               <h1 className="home-page-heading">Welcome</h1> 
            </div>
        </>
    )
}