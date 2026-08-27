import axios from "axios";
import { checkToken } from "./utils/auth";

// Local
export const basePath = "http://localhost/react-project-api/";
export const baseApiUrl = "http://localhost/react-project-api/api/";

// Host
// export const basePath = "http://example.com/";
// export const baseApiUrl = "http://example.com/api/";

export const api = axios.create({ 
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = checkToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});