import Swal from "sweetalert2";

export const validateResponse = async (peticion) => {
  try{
    const response = await peticion;
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      Swal.fire({
        icon: "error",
        title: "Error 404",
        text: "No se encontraron registros",
      });
    }
    if (error.response.status === 400) {
      const errors = error.response.data.errors;
      if(errors === undefined) {
        Swal.fire({
          icon: "error",
          title: 'Error 400',
          text: 'Petición y/o parámetros incorrectos',
        });
      }else{
        Swal.fire({
          icon: "error",
          title: `${error.response.data.status}`,
          html: `
            <ul class="list-disc list-inside text-left space-y-2">
              ${errors.map(err => `<li class="text-gray-800 font-semibold">${err}</li>`).join('')}
            </ul>
          `,
        });
      }
    }
    if (error.response.status === 500) {
      Swal.fire({
        icon: "error",
        title: "Error 500",
        text: "Error en el servidor, por favor, intente más tarde",
      });
    }
    return [];
  }
};