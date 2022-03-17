import axios from "axios";

const getCars = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.get(`http://localhost:4000/car`);
        dispatch({ type: "GET_ALL_CARS", payload: response.data });
        dispatch({ type: "LOADING", payload: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: true });
    }
};
