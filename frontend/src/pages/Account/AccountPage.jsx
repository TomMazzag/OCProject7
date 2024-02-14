import { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar"
import "./AccountPage.css"
import { getUserDetails } from "../../services/account"

export const AccountPage = () => {
    const [user, setUser] = useState()
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        getUserDetails(token)
        .then((user) => {
            setUser(user.details)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [token])

    return (
        <>
            <Navbar />
            <div className="account-page">
                <h1 className="account-page-heading">Account Page</h1> 
                {/*Placeholder Text*/}
                <div className="account-user-details">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>Password</p>
                    <textarea placeholder="About me"></textarea>
                </div>
                <button className="delete-account">Delete Account</button>
            </div>
        </>
    )
}