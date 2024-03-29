import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3307/Backend",
    headers: {
        "Content-type": "application/json"
    }
});