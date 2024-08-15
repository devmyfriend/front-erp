
# productKeyServices

The `productKeyServices` service handles operations related to product keys in the application, using Axios to make HTTP requests to the backend.

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadProductsKeys`

This function loads all available product keys from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadProductsKeys = async (pagina) => {
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
```
