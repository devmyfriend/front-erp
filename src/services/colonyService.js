import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadColonies = async () => {
  try {
    const response = await axios.get(`${rutaGeneral}v1/catalogo/colonias`);
    if (response.status === 200 && response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error",
      text: JSON.stringify(error.message),
      icon: "error",
    });
    return [];
  }
};

export const searchColonies = async (colonyName, postalCode) => {
  try {
    const payload = {
      colonia: colonyName,
      cp: postalCode ? postalCode.toString() : undefined,
    };
    const response = await axios.post(
      `${rutaGeneral}v1/catalogo/colonias/buscar`,
      payload
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Error",
      text: JSON.stringify(error.message),
      icon: "error",
    });
    return null;
  }
};
