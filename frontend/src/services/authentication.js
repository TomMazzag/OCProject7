const config = require("../config");
const BACKEND_URL = config.BACKEND_URL;

export const login = async (email, password) => {
    const payload = {
        email: email,
        password: password,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/auth/login`, requestOptions);

    if (response.status === 200) {
        let data = await response.json();
        return [data.token, data.userId];
    } else if (response.status === 401) {
        throw new Error("Incorrect password");
    } else {
        throw new Error(
            `Received status ${response.status} when logging in. Expected 201`
        );
    }
};

export const signup = async (full_name, email, password) => {
    const payload = {
        name: full_name,
        email: email,
        password: password,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/auth/signup`, requestOptions);

    if (response.status === 201) {
        return;
    } else if (response.status === 409) {
        console.log("Duplicate EMAIL")
        throw new Error("Duplicate email")
    } else {
        throw new Error(
            `Received status ${response.status} when signing up. Expected 201`
        );
    }
};
