import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const cargarImpuestos = async () => {
  try {
    const datos = await axios.get(`${rutaGeneral}v1/impuestos`);
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
};

export const crearImpuesto = async (impuesto) => {
  try {
    const datos = await axios.post(`${rutaGeneral}v1/impuestos`, impuesto);
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "El impuesto ha sido creado correctamente",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 409) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Intenta ingresar un impuesto válido",
        icon: "error",
      });
    } else {
      console.error("error: ", JSON.stringify(error));
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Error del servidor",
        icon: "error",
      });
    }
  }
};

export const actualizarImpuesto = async (impuesto) => {
  try {
    const datos = await axios.put(`${rutaGeneral}v1/impuestos`, impuesto);
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "El impuesto ha sido actualizado correctamente",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 404) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Intenta ingresar un impuesto válido",
        icon: "error",
      });
    } else {
      console.error("error: ", JSON.stringify(error));
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Error del servidor",
        icon: "error",
      });
    }
  }
};

export const eliminarImpuesto = async (id) => {
  try {
    const datos = await axios.delete(`${rutaGeneral}v1/impuestos/${id}`);
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "El impuesto ha sido eliminado correctamente",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 404) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Intenta ingresar un impuesto válido",
        icon: "error",
      });
    } else {
      console.error("error: ", JSON.stringify(error));
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Error del servidor",
        icon: "error",
      });
    }
  }
};

/* 

export const eliminarImpuesto = async (impuesto) => {
    try {
        const datos = await axios.delete(`${rutaGeneral}v1/impuestos`, { data: impuesto });
        if (datos.status === 200 && datos.statusText === "OK") {
            Swal.fire({
                title: datos.data.message,
                text: "El impuesto ha sido eliminado correctamente",
                icon: "success",
            });
            return true;
        }
    } catch (error) {
        console.error(error);
        if (error.response.status === 404) {
            Swal.fire({
                title: error.response.data.error ? error.response.data.error : JSON.stringify(error),
                text: "Intenta ingresar un impuesto válido",
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

*/
