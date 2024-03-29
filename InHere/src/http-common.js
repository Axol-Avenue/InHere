import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3307/Backend",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
});