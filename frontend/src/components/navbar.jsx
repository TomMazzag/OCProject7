import logo from "../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()

    const account = () => {
        navigate("/account")
    }

    const signOut = () => {
        navigate("/")
    }

    return (
        <nav>
            <a href="/home"><img src={logo} alt="Groupomania logo" className="logo" /></a>

            <div>
                <button onClick={account}>Account</button>
                <button onClick={signOut}>Sign Out</button>
            </div>
        </nav>
    );
}