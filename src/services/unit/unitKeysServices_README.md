
# unitKeysServices

The `unitKeysServices` service handles operations related to unit keys in the application, using Axios to make HTTP requests to the backend.

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadUnitKeys`

This function loads all available unit keys from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadUnitKeys = async (pagina) => {
  try {
    const datos = await axios.get(`${rutaGeneral}v1/unidades/${pagina}`);
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
```
