import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.post(`http://localhost:4000/users/login`, reqObj);
        localStorage("user", JSON.stringify(response.data));
        message.success("Login success");
        dispatch({ type: "LOADING", payload: false });
        console.log(response);
    } catch (error) {
        console.log(error);
        message.error("Something went wrong");
        dispatch({ type: "LOADING", payload: false });
    }
};

export const userRegister = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.post(`http://localhost:4000/users/register`, reqObj);
        localStorage("user", JSON.stringify(response.data));
        dispatch({ type: "LOADING", payload: false });
        message.success("Registration successfull");
        // console.log(response);
    } catch (error) {
        console.log(error);
        message.error("Something went wrong");
        dispatch({ type: "LOADING", payload: false });
    }
};
