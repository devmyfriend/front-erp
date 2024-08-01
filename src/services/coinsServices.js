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

export const crearMoneda = async (moneda) => {
    try {
        const datos = await axios.post(`${rutaGeneral}v1/catalogo/metodos/moneda`, moneda);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "La moneda ha sido creada correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 409) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar una moneda válida",
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

export const actualizarMoneda = async (moneda) => {
    try {
        const datos = await axios.patch(`${rutaGeneral}v1/catalogo/metodos/moneda`, moneda);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "La moneda ha sido actualizada correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar una moneda válida",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Error del servidor",
                icon: "error",
            });
        }
    }
}

export const eliminarMoneda = async (clave) => {
    try {
        const datos = await axios.delete(`${rutaGeneral}v1/catalogo/metodos/moneda`, { data: { ClaveMoneda: clave } });
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "La moneda ha sido eliminada correctamente",
                icon: "success",
            });
            return true;
        }
    }
    catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar una moneda válida",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Error del servidor",
                icon: "error",
            });
        }
    }
}

/* export const crearMoneda = async (moneda) => {
    try {
        const datos = await axios.post(`${rutaGeneral}v1/catalogo/metodos/moneda`, moneda);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "La moneda ha sido creada correctamente",
                icon: "success",
            });
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.message,
                text: "Intenta ingresar una moneda válida",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: JSON.stringify(error),
                text: JSON.stringify(error.response.data.errors) ? JSON.stringify(error.response.data.errors) : JSON.stringify(error),
                icon: "error",
            });
        }
    }
}

export const actualizarMoneda = async (moneda) => {
    try {
        const datos = await axios.patch(`${rutaGeneral}v1/catalogo/metodos/moneda`, moneda);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.Message,
                text: "La moneda ha sido actualizada correctamente",
                icon: "success",
            });
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.message,
                text: "Intenta ingresar una moneda válida",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: JSON.stringify(error),
                text: JSON.stringify(error.response.data.errors) ? JSON.stringify(error.response.data.errors) : JSON.stringify(error),
                icon: "error",
            });
        }
    }
}

export const eliminarMoneda = async (moneda) => {
    try {
        const datos = await axios.delete(`${rutaGeneral}v1/catalogo/metodos/moneda/${moneda}`);
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.Message,
                text: "La moneda ha sido eliminada correctamente",
                icon: "success",
            });
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.message,
                text: "Intenta ingresar una moneda válida",
                icon: "error",
            });
        } else {
            Swal.fire({
                title: JSON.stringify(error),
                text: JSON.stringify(error.response.data.errors) ? JSON.stringify(error.response.data.errors) : JSON.stringify(error),
                icon: "error",
            });
        }
    }
} */