import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const cargarComprobantes = async () => {
    try {
        const datos = await axios.get(`${rutaGeneral}v1/comprobante`);
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

export const crearComprobante = async (comprobante) => {
    try{
        const datos = await axios.post(`${rutaGeneral}v1/comprobante`, comprobante);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "El comprobante ha sido creado correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error){ 
        console.error(error);
        if (error.response.status === 409) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar un comprobante válido",
                icon: "error",
            });
        } else {
            console.error('error: ', JSON.stringify(error));
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Error del servidor",
                icon: "error",
            });
        }
    }
}

export const actualizarComprobante = async(comprobante) => {
    try {
        const datos = await axios.patch(`${rutaGeneral}v1/comprobante`, comprobante);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "El comprobante ha sido actualizado correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error) {
        console.error(error);
        if(error.response.status === 404) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar un comprobante válido",
                icon: "error",
            });
        } else {
            console.error('error: ', JSON.stringify(error));
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Error del servidor",
                icon: "error",
            });
        }
    }
}

export const eliminarComprobante = async(comprobante) => {
    try {
        const datos = await axios.delete(`${rutaGeneral}v1/comprobante/${comprobante}`);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "El comprobante ha sido eliminado correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error) {
        console.error(error);
        if(error.response.status === 404) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar un comprobante válido",
                icon: "error",
            });
        } else {
            console.error('error: ', JSON.stringify(error));
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Error del servidor",
                icon: "error",
            });
        }
    }
}