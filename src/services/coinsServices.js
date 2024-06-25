import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const cargarMonedas = async () => {
    try {
        const datos = await axios.get(`${rutaGeneral}v1/catalogo/metodos/moneda`);
        if (datos.status === 200 && datos.statusText === "OK") {
            return datos.data;
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

export const buscarMonedas = async (moneda) => {
    try {
        const datos = await axios.get(`${rutaGeneral}v1/catalogo/metodos/moneda/buscar/${moneda}`);
        if (datos.status === 200 && datos.statusText === "OK") {
            return datos.data;
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