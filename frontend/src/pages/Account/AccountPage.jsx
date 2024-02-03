import { Navbar } from "../../components/navbar"
import "./AccountPage.css"

export const AccountPage = () => {
    return (
        <>
            <Navbar />
            <div className="account-page">
                <h1 className="account-page-heading">Account Page</h1> 
                {/*Placeholder Text*/}
                <div className="account-user-details">
                    <p>Full Name</p>
                    <p>Email</p>
                    <p>Password</p>
                </div>
                <button className="delete-account">Delete Account</button>
            </div>
        </>
    )
}