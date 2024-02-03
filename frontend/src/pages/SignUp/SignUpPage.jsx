import { Navbar } from "../../components/navbar"
import "./SignUpPage.css"

export const SignUpPage = () => {
    return (
        <>
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
            </form>
        </>
    )
}