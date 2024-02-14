import "./LoginPage.css"
import logo from "../../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authentication";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await login(email, password);
            navigate("/home");
        } catch (err) {
            console.error(err.message);
            return setErrorMessage(err.message);
        }
    };

    return (
        <>
            <nav className="login-page-nav">
                <img src={logo} alt="Groupomania logo" className="logo" />
            </nav>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Company Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    {errorMessage ? (
                        <p className="error-message">{errorMessage}</p>
                    ) : null}
                    <input
                        type="submit"
                        role="submit-button"
                        value="Login"
                        className="submit-button"
                    />
                    <a href="/signup">New here, create an account!</a>
                </form>
            </div>
        </>
    );
}