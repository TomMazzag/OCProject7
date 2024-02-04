import "./LoginPage.css"
import logo from "../../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";

export const LoginPage = () => {
    return (
        <>
            <nav className="login-page-nav">
                <img src={logo} alt="Groupomania logo" className="logo" />
            </nav>
            <div className="login">
                <h1>Login</h1>
                <form action="">
                <div>
                    <label htmlFor="">Company Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <a href="/signup">New here, create an account!</a>
                </form>
            </div>
        </>
    )
}