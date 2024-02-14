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
    if (response.status === 201) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(
            `Received status ${response.status} when getting user details. Expected 201`
        );
    }
};
