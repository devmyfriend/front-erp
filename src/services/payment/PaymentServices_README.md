
# PaymentServices

The `PaymentServices` service handles operations related to payment methods in the application, using Axios to make HTTP requests to the backend.

## Endpoints

All endpoints used in this service are from the main backend (`rutaGeneral`).

## Functions

### 1. `loadMethodsFormsPayments`

This function loads all available payment methods from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaGeneral = import.meta.env.VITE_API_URL;

export const loadMethodsFormsPayments = async () => {
  try {
    const datos = await axios.get(`${rutaGeneral}v1/catalogo/metodos/pago`);
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
