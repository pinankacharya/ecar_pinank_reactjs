import { Axios } from "axios";
import dotenv from "dotenv";
dotenv.config();

const ECAR_BACKEND_CALL = (url, method, headers, body) => {
    return new Axios().request({
        baseURL: process.env.BACKEND_URL || "http://localhost:3000",
        headers,
        data: body,
        method,
        url,
    });
};

export default ECAR_BACKEND_CALL;
