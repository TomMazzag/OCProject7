import logo from "../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Groupomania logo" className="logo" />

            <div>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    );
}