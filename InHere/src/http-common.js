import axios from "axios";

export default axios.create({
    baseURL: "https://ec2-18-223-107-62.us-east-2.compute.amazonaws.com:3307",
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
});