import axios from "axios";
import Swal from "sweetalert2";
import { apiSAT } from "@/apis/SAT";
import { apiProducts } from "@/apis/products";
const rutaProductos = import.meta.env.VITE_API_PRODUCTS_URL;
const rutaGeneral = import.meta.env.VITE_API_URL;

/* Nuevos */

export const loadProducts = async () => {
  return await apiProducts.get("/productos");
}

export const loadTypeProducts = async () => {
  return await apiProducts.get("/productos/tipo");
}

export const findProducts = async (nombre, tipo) => {
  return await apiProducts.get(`/productos/buscar/${nombre}/${tipo}`);
}

export const getProduct = async (clave) => {
  return await apiProducts.get(`/productos/detalle/${clave}`);
}

export const createProduct = async (producto) => {
  return await apiProducts.post("/productos", producto);
}

export const deleteProduct = async (payload) => {
  return await apiProducts.delete("/productos", { data: payload });
}

export const loadProductsKeys = async (pagina) => {
  return await apiProducts.get(`/productos/servicio/palabra/${pagina}`);
}

export const loadUnitKeys = async (pagina) => {
  return await apiProducts.get(`/unidades/${pagina}`);
}

export const findProductsKeys = async (palabra) => {
  return await apiProducts.get(`/productos/servicio/buscar/descripcion/${palabra}`);
}

export const findUnitKeys = async (palabra) => {
  return await apiProducts.get(`/unidades/buscar/nombre/${palabra}`);
}

/* Nuevos */



/* export const loadProducts = async () => {
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
export const loadTypeProducts = async () => {
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
export const findProducts = async (nombre, tipo) => {
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
export const loadUnitKeys = async (pagina) => {
  try {
    const datos = await apiSAT.get(`unidades/${pagina}`);
    
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
export const loadProductsKeys = async (pagina) => {
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
export const findProductsKeys = async (palabra) => {
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
export const findUnitKeys = async (palabra) => {
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
export const getProduct = async (clave) => {
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
export const createProduct = async (producto) => {
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
export const deleteProduct = async (payload) => {
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
}; */
