import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Authorization": "Bearer YOUR_API_TOKEN"
    }
});

export default instance;