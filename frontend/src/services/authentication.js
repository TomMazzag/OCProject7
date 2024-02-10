require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

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

    const response = await fetch(`${BACKEND_URL}/api/auth/signup`, requestOptions);

    if (response.status === 201) {
        let data = await response.json();
        return [data.token, data.id];
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

    const response = await fetch(`${BACKEND_URL}/api/auth/signup`, requestOptions);

    if (response.status === 201) {
        return;
    } else {
        throw new Error(
            `Received status ${response.status} when signing up. Expected 201`
        );
    }
};
