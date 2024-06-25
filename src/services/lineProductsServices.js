import axios from "axios";
import Swal from "sweetalert2";
const rutaProductos = import.meta.env.VITE_API_PRODUCTS_URL;

export const cargarLineas = async () => {
    try {
        const datos = await axios.get(`${rutaProductos}v1/lineas`);
        if (datos.status === 200 && datos.statusText === "OK") {
            return datos.data.response;
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: "Error",
            text: JSON.stringify(error.message),
            icon: "error",
        });
    }
}