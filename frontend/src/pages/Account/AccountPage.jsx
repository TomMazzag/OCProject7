import { useEffect, useState, useRef } from "react"
import { Navbar } from "../../components/navbar"
import "./AccountPage.css"
import { getUserDetails } from "../../services/account"

export const AccountPage = () => {
    const [user, setUser] = useState()
    const token = window.localStorage.getItem("token")
    const [aboutMe, setAboutMe] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [editPassword, setEditPassword] = useState(false)
    const [disableSave, setDisableSave] = useState(true)

    useEffect(() => {
        getUserDetails(token)
        .then((user) => {
            setUser(user.details)
            setNewUsername(user.details.name)
            setNewEmail(user.details.email)
        })
        .catch((err) => {
            console.error(err)
        })
    }, [token])

    const toggleEdit = () => {
        setEditPassword(!editPassword)
    }

    const saveDetails = () => {
        console.log("Trying to update profile")
    }

    useEffect(() => {
        if (user) {
            if (newUsername != user.name || newEmail != user.email || aboutMe !== "") {
                setDisableSave(false)
            } else {
                setDisableSave(true)
            }
        }
    }, [newUsername, newEmail, aboutMe])

    const textAreaRef = useRef(null);
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [aboutMe]);

    return (
        <>
            <Navbar />
            <div className="account-page">
                <h1 className="account-page-heading">Account Page</h1>
                {user ? (
                    <div className="account-user-details">
                        <div className="edit-section">
                            <input value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
                        </div>
                        <div className="edit-section">
                            <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
                        </div>
                        <textarea
                            placeholder="Add an about me"
                            className="about-me"
                            type="text"
                            value={aboutMe}
                            onChange={(e) => setAboutMe(e.target.value)}
                            rows={1}
                            ref={textAreaRef}
                        ></textarea>
                        <div className="edit-section">
                            <p>Password</p>
                            <button className="edit-password" onClick={toggleEdit}>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                        </div>
                        <button 
                            className={`save-button ${disableSave ? 'disabled' : ''}`} 
                            onClick={saveDetails} 
                            disabled={disableSave}
                        >Save</button>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
                <button className="delete-account">Delete Account</button>
            </div>
        </>
    );
}