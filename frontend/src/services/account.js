const config = require("../config");
const BACKEND_URL = config.BACKEND_URL;

export const getUserDetails = async (token) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(
        `${BACKEND_URL}/auth/details`,
        requestOptions
    );
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(
            `Received status ${response.status} when getting user details. Expected 201`
        );
    }
};

export const UpdateUserDetails = async (token, payload) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/auth/update`, requestOptions);
    if (response.status === 201) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(
            `Received status ${response.status} when updating user details. Expected 201`
        );
    }
};

export const deleteAccount = async (token) => {
    const requestOptions = {
    method: "DELETE",
    headers: {
        Authorization: `Bearer ${token}`
    }
    };

    const response = await fetch(`${BACKEND_URL}/auth/delete`, requestOptions);
    if (response.status === 202) {
        return;
    } else {
        throw new Error(
            `Received status ${response.status} when deleting user. Expected 202`
        );
    }
}
