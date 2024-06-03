import axios from "axios";
import Swal from "sweetalert2";
const rutaTemporal = "http://lachosoft.cloud:7000/api/";

export const cargarProductos = async () => {
    try {
        const datos = await axios.get(`${rutaTemporal}v1/productos`);
        if (datos.status === 200 && datos.statusText === "OK") {
            return datos.data.response;
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: "Error",
            text: JSON.stringify(error.message),
            icon: "error",
        });
    }
};

export const cargarTiposProducto = async () => {
    try {
        const datos = await axios.get(`${rutaTemporal}v1/productos/tipo`);
        if (datos.status === 200 && datos.statusText === "OK") {
            return datos.data.response;
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: "Error",
            text: JSON.stringify(error.message),
            icon: "error",
        });
    }
};

// Repite lo mismo para las demás acciones...
