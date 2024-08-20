import axios from "axios";

export const apiSAT = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_API_SAT,
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});