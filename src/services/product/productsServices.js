import axios from "axios";
import Swal from "sweetalert2";
const rutaProductos = import.meta.env.VITE_API_PRODUCTS_URL;
const rutaGeneral = import.meta.env.VITE_API_URL;

export const cargarProductos = async () => {
  try {
    const datos = await axios.get(`${rutaProductos}v1/productos`);
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
};
export const cargarTiposProducto = async () => {
  try {
    const datos = await axios.get(`${rutaProductos}v1/productos/tipo`);
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
};
export const buscarProductos = async (nombre, tipo) => {
  try {
    const datos = await axios.get(
      `${rutaProductos}v1/productos/buscar/${nombre}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      if (tipo === "Todos") {
        return datos.data.response;
      } else {
        const respuesta = datos.data.response.filter(
          (producto) =>
            producto.NombreTipoProducto.toLowerCase() === tipo.toLowerCase()
        );
        return respuesta;
      }
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

export const cargarClavesUnidades = async (pagina) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/unidades/${pagina}`
    );

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
export const cargarClavesProductos = async (pagina) => {
  try {
    const datos = await axios.get(
      `${rutaGeneral}v1/productos/servicio/palabra/${pagina}`
    );
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
};
export const buscarClavesProductos = async (palabra) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/productos/servicio/buscar/descripcion/${palabra}`
    );

    if (datos.data.response.length === 0) {
      Swal.fire({
        title: "No se encontraron resultados",
        text: "Intente con otra palabra",
        icon: "info",
      });
      return false;
    }
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
};
export const buscarClavesUnidades = async (palabra) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/unidades/buscar/nombre/${palabra}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      return datos.data;
    }
  } catch (error) {
    console.error(error);
    const { response } = error.request;
    Swal.fire({
      title: `${response.message ? response.message : "Error"}`,
      text: "No se encontraron resultados",
      icon: "info",
    });
  }
};

export const obtenerProducto = async (clave) => {
  try {
    const datos = await axios.get(
      `${rutaProductos}v1/productos/detalle/${clave}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      return datos.data.response[0];
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
export const crearProducto = async (producto) => {
  try {
    const data = await axios.post(
      `${rutaProductos}v1/productos/crear`,
      producto
    );

    if (data.status === 200 && data.statusText === "OK") {
      Swal.fire({
        title: `${data.data.message}:`,
        text: `Producto con ID: ${data.data.ProductoId}`,
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    const { response } = error.request;
    const msg = JSON.parse(response);
    console.error(error);
    Swal.fire({
      title: msg.status ? `${msg.status}` : `Error`,
      text: msg.error
        ? msg.error
        : msg.errors[0] === "Invalid value"
        ? `${msg.errors[1]}`
        : `${msg.errors[0]}`,
      icon: "error",
    });
  }
};
export const borrarProducto = async (payload) => {
  try {
    const datos = await axios.delete(`${rutaProductos}v1/productos/borrar`, {
      data: payload,
    });

    if (datos.status === 200 && datos.statusText === "OK") {
      return true;
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
