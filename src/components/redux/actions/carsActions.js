import axios from "axios";

export const getAllCars = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.get(`http://localhost:4000/car`);
        dispatch({ type: "GET_ALL_CARS", payload: response.data });
        dispatch({ type: "LOADING", payload: false });
        console.log(response);
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
    }
};

export const addCar = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        await axios.post(`http://localhost:4000/car`, reqObj);

        dispatch({ type: "LOADING", payload: false });
        // message.success("New car added");
        setTimeout(() => {
            window.location.href = "/";
        }, 500);
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
    }
};
