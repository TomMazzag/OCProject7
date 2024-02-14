const config = require("../config");
const BACKEND_URL = config.BACKEND_URL;

export const addNewPost = async (token, message) => {
    const payload = {
        message: message,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/posts/new`, requestOptions);

    if (response.status === 201) {
        return;
    } else {
        throw new Error(
            `Received status ${response.status} when adding a new post. Expected 201`
        );
    }
};

export const getAllPosts = async (token) => {

    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await fetch(`${BACKEND_URL}/posts`, requestOptions);

    if (response.status === 201) {
        return;
    } else {
        throw new Error(
            `Received status ${response.status} when adding a new post. Expected 201`
        );
    }
};
