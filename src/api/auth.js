import axios from "axios";
const backendUrl = `http://localhost:3001/api/v1/auth`;

export const registerUser = async ({ email, password, mobile, name }) => {
    try {
        const reqUrl = `${backendUrl}/register`;
        const response = await axios.post(reqUrl, {
            name,
            password,
            mobile,
            email,
        });
        return;
    } 
    catch (error) {
        console.log(error);
        alert("Something went wrong while registerUser");
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const reqUrl = `${backendUrl}/login`;
        const response = await axios.post(reqUrl, {
            password,
            email,
        });
        if (response.status === 200 && response.data?.token) {
            const { token, name, userId } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            localStorage.setItem("userId", userId);
        }
        return true;
    } 
    catch (error) {
        console.log("error");
        alert("Something went wrong login auth");
    }
};
