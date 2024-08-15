
# lineProductsServices

The `lineProductsServices` service handles operations related to product lines in the application, using Axios to make HTTP requests to the products backend.

## Endpoints

All endpoints used in this service are from the products backend (`rutaProductos`).

## Functions

### 1. `loadLines`

This function loads all available product lines from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaProductos = import.meta.env.VITE_API_PRODUCTS_URL;

export const loadLines = async () => {
  try {
    const datos = await axios.get(`${rutaProductos}v1/lineas`);
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
