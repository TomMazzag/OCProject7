import "./SignUpPage.css"
import logo from "../../assets/Groupomania_Logos/icon-left-font-monochrome-white.svg";

export const SignUpPage = () => {
    return (
        <>
            <nav className="login-page-nav">
                <img src={logo} alt="Groupomania logo" className="logo" />
            </nav>
            <div className="signup">
                <h1>SignUp</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Company Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label htmlFor="">Verify Password</label>
                        <input type="password" />
                    </div>
                    <a href="/login">Already have an account? Login here!</a>
                </form>
            </div>
            
        </>
    )
}