
# zipCodeService

The `zipCodeService` handles operations related to zip codes in the application, using Axios to make HTTP requests to the backend.

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadZipCode`

This function loads all available zip codes from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadZipCode = async () => {
  try {
    const response = await axios.get(`${rutaGeneral}v1/catalogo/cp`);
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
```

### 2. `findZipCode`

This function searches for a specific zip code in the backend.

```javascript
export const findZipCode = async (cp) => {
  try {
    const response = await axios.post(`${rutaGeneral}v1/catalogo/cp/buscar`, {
      cp,
    });
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
```
