import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const cargarClavesProductos = async (pagina) => {
  try {
    if (pagina === undefined) {
      pagina = 1;
    }
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
