import "./SignUpPage.css"
import logo from "../../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";
import { useState } from "react";
import { signup } from "../../services/authentication";

export const SignUpPage = () => {
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const handleFull_name = (event) => {
        setFull_name(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleVerifyPassword = (event) => {
        setVerifyPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!isValidEmail(email)) {
            return setErrorMessage("Invalid email address");
        }

        if (password !== verifyPassword) {
            return setErrorMessage("Passwords do not match");
        }

        if (!isValidPassword(password)) {
            return setErrorMessage("Invalid password!");
        }

        try {
            await signup(full_name, email, password)
        } catch (err) {
            console.error(err)
        }
        
    }

    return (
        <>
            <nav className="login-page-nav">
                <img src={logo} alt="Groupomania logo" className="logo" />
            </nav>
            <div className="signup">
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input
                            type="text"
                            value={full_name}
                            onChange={handleFull_name}
                            required
                        />
                    </div>
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
                    <div>
                        <label htmlFor="">Verify Password</label>
                        <input
                            type="password"
                            value={verifyPassword}
                            onChange={handleVerifyPassword}
                            required
                        />
                    </div>
                    {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
                    <input type="submit" role="submit-button" value="Sign up" className="submit-button" />
                    <a href="/login">Already have an account? Login here!</a>
                </form>
            </div>
        </>
    );
}