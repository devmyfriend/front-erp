import axios from "axios";

export const apiProducts = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_API_PRODUCTS,
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});