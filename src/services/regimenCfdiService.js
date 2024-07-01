import axios from "axios";
import Swal from "sweetalert2";

const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadRegimen = async () => {
  try {
    const response = await axios.get(`${rutaGeneral}v1/catalogo/sat/cfdi`);
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

export const createRegimen = async (regimen) => {
  try {
    const response = await axios.post(
      `${rutaGeneral}v1/catalogo/sat/regimenfiscal`,
      regimen
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response.data;
    } else {
      throw new Error(
        `Error al crear el régimen: respuesta no válida del servidor. Status: ${response.status}, Status Text: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error al crear el régimen:", error);
    Swal.fire({
      title: "Error al crear el régimen",
      text:
        error.response && error.response.data
          ? JSON.stringify(error.response.data)
          : error.message,
      icon: "error",
    });
    throw error;
  }
};

export const deleteRegimen = async (claveRegimenFiscal) => {
  try {
    const response = await axios.patch(
      `${rutaGeneral}v1/catalogo/sat/regimenfiscal`,
      {
        ClaveRegimenFiscal: claveRegimenFiscal,
        Activo: false,
      }
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response.data;
    } else {
      throw new Error(
        `Error al eliminar el régimen: respuesta no válida del servidor. Status: ${response.status}, Status Text: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error al eliminar el régimen:", error);
    Swal.fire({
      title: "Error al eliminar el régimen",
      text:
        error.response && error.response.data
          ? JSON.stringify(error.response.data)
          : error.message,
      icon: "error",
    });
    throw error;
  }
};

export const updateRegimen = async (regimen) => {
  try {
    const response = await axios.patch(
      `${rutaGeneral}v1/catalogo/sat/regimenfiscal`,
      {
        ClaveRegimenFiscal: regimen.ClaveRegimenFiscal,
        Descripcion: regimen.Descripcion,
        Fisica: regimen.Fisica,
        Moral: regimen.Moral,
        Activo: regimen.Activo,
      }
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response.data;
    } else {
      throw new Error(
        `Error al actualizar el régimen: respuesta no válida del servidor. Status: ${response.status}, Status Text: ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error al actualizar el régimen:", error);
    Swal.fire({
      title: "Error al actualizar el régimen",
      text:
        error.response && error.response.data
          ? JSON.stringify(error.response.data)
          : error.message,
      icon: "error",
    });
    throw error;
  }
};
