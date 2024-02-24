import { useEffect, useState, useRef } from "react"
import { Navbar } from "../../components/navbar"
import "./AccountPage.css"
import { UpdateUserDetails, getUserDetails, deleteAccount } from "../../services/account"
import { useNavigate } from "react-router-dom"

export const AccountPage = () => {

    const [user, setUser] = useState()
    const token = window.localStorage.getItem("token")
    const [aboutMe, setAboutMe] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [editPassword, setEditPassword] = useState(false)
    const [disableSave, setDisableSave] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [confirmDelete, setConfirmDelete] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let timer;

        if (successMessage || errorMessage) {
            timer = setTimeout(() => {
                setSuccessMessage("");
                setErrorMessage("");
                window.location.reload()
            }, 3000);
        }

        getUserDetails(token)
        .then((user) => {
            setUser(user.details)
            setNewUsername(user.details.name)
            setNewEmail(user.details.email)
            if (user.details.bio !== "") {
                setAboutMe(user.details.bio)
            }
        })
        .catch((err) => {
            console.error(err)
        })
    }, [token, successMessage, errorMessage])

    const toggleEdit = () => {
        setEditPassword(!editPassword)
    }

    const saveDetails = () => {
        console.log("Trying to update profile")
        let payload = {}
        if (newUsername !== user.name) {
            payload["name"] = newUsername
        }
        if (newEmail !== user.email) {
            payload["email"] = newEmail;
        }
        if (aboutMe !== "") {
            payload["bio"] = aboutMe;
        }
        try {
            UpdateUserDetails(token, payload)
            setSuccessMessage("Details updated successfully")
        } catch(error) {
            setErrorMessage(`Error: ${error}`)
        }
    }

    useEffect(() => {
        if (user) {
            if (newUsername != user.name || newEmail != user.email || aboutMe !== user.bio) {
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

    const deleteUser = () => {
        try {
            deleteAccount(token)
            window.localStorage.removeItem("token")
            navigate("/login")
        } catch (error) {
            setErrorMessage(`Error: ${error}`);
        }
    }

    return (
        <>
            <Navbar />
            <div className="account-page">
                <h1 className="account-page-heading">Account Page</h1>
                {user ? (
                    <div className="account-user-details">
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <div className="edit-section">
                            <input value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
                        </div>
                        <div className="edit-section">
                            <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
                        </div>
                        <textarea
                            placeholder={user.bio ? user.bio : "Add an about me"}
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
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
                <button className="delete-account" onClick={() => setConfirmDelete(true)}>Delete Account</button>
            </div>
            {confirmDelete && <div className="delete-popup-box">
                <div className="popup-content">
                    <h1>Delete Account</h1>
                    <p>Are you sure you want to delete your account?</p>
                    <div className="popup-options">
                        <button className="cancel" onClick={() => setConfirmDelete(false)}>Cancel</button>
                        <button className="delete-account" onClick={deleteUser}>Yes</button>
                    </div>
                </div>
            </div>}
        </>
    );
}