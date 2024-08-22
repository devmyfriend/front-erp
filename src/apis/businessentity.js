import axios from "axios";


export const apiBusinessEntity = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_API_BUSINESSENTITY,
    timeout: 10000,
    headers:{
        'Content-Type': 'application/json'
    }
});