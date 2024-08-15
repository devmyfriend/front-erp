
# receiptServices

The `receiptServices` service handles operations related to receipts in the application, using Axios to make HTTP requests to the backend.

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadReceipts`

This function loads all available receipts from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadReceipts = async () => {
  try {
    const datos = await axios.get(`${rutaGeneral}v1/comprobante`);
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

### 2. `createReceipt`

This function creates a new receipt in the backend.

```javascript
export const createReceipt = async (comprobante) => {
  try {
    const datos = await axios.post(`${rutaGeneral}v1/comprobante`, comprobante);
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The receipt has been created successfully",
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
        text: "Please enter a valid receipt",
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

### 3. `updateReceipt`

This function updates an existing receipt in the backend.

```javascript
export const updateReceipt = async (comprobante) => {
  try {
    const datos = await axios.patch(
      `${rutaGeneral}v1/comprobante`,
      comprobante
    );
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The receipt has been updated successfully",
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
        text: "Please enter a valid receipt",
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

### 4. `deleteReceipt`

This function deletes a receipt from the backend.

```javascript
export const deleteReceipt = async (comprobante) => {
  try {
    const datos = await axios.delete(
      `${rutaGeneral}v1/comprobante/${comprobante}`
    );
    if (datos.status === 200 && datos.statusText === "OK") {
      Swal.fire({
        title: datos.data.message,
        text: "The receipt has been deleted successfully",
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
        text: "Please enter a valid receipt",
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
