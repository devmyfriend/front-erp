import axios from "axios";

export const apiTest = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_API_LOCAL_SAT,
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});