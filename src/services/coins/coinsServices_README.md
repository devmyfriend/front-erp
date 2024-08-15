
# coinsServices

The `coinsServices` service handles operations related to currencies in the application, using Axios to make HTTP requests to the backend. It is divided into the following functions:

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadCoins`

This function loads all available currencies from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadCoins = async () => {
  try {
    const datos = await axios.get(`${rutaGeneral}v1/catalogo/metodos/moneda`);
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

### 2. `findCoins`

This function searches for a specific currency by its name.

```javascript
export const findCoins = async (moneda) => {
  try {
    const datos = await axios.get(
      `${rutaGeneral}v1/catalogo/metodos/moneda/buscar/${moneda}`
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
```

### 3. `createCoin`

This function creates a new currency in the backend.

```javascript
export const createCoin = async (moneda) => {
  try {
    const datos = await axios.post(
      `${rutaGeneral}v1/catalogo/metodos/moneda`,
      moneda
    );
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The currency has been created successfully",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 409) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Please enter a valid currency",
        icon: "error",
      });
    } else {
      console.error("error: ", JSON.stringify(error));
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Server error",
        icon: "error",
      });
    }
  }
};
```

### 4. `updateCoin`

This function updates an existing currency in the backend.

```javascript
export const updateCoin = async (moneda) => {
  try {
    const datos = await axios.patch(
      `${rutaGeneral}v1/catalogo/metodos/moneda`,
      moneda
    );
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The currency has been updated successfully",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 404) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Please enter a valid currency",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Server error",
        icon: "error",
      });
    }
  }
};
```

### 5. `deleteCoin`

This function deletes a currency from the backend.

```javascript
export const deleteCoin = async (clave) => {
  try {
    const datos = await axios.delete(
      `${rutaGeneral}v1/catalogo/metodos/moneda`,
      { data: { ClaveMoneda: clave } }
    );
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The currency has been deleted successfully",
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    console.error(error);
    if (error.response.status === 404) {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Please enter a valid currency",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: error.response.data.error
          ? error.response.data.error
          : JSON.stringify(error),
        text: "Server error",
        icon: "error",
      });
    }
  }
};
```
