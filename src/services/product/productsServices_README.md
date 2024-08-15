
# productsServices

The `productsServices` service handles operations related to products in the application, using Axios to make HTTP requests to both the main backend (`rutaGeneral`) and the products backend (`rutaProductos`).

## Endpoints

- `rutaGeneral`: Main backend.
- `rutaProductos`: Products backend.

## Functions

### 1. `loadProducts`

This function loads all available products from the backend.

```javascript
import axios from "axios";
import Swal from "sweetalert2";
const rutaProductos = import.meta.env.VITE_API_PRODUCTS_URL;

export const loadProducts = async () => {
  try {
    const datos = await axios.get(`${rutaProductos}v1/productos`);
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

### 2. `loadTypeProducts`

This function loads all available product types from the backend.

```javascript
export const loadTypeProducts = async () => {
  try {
    const datos = await axios.get(`${rutaProductos}v1/productos/tipo`);
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

### 3. `findProducts`

This function searches for products by name and type.

```javascript
export const findProducts = async (nombre, tipo) => {
  try {
    const datos = await axios.get(
      `${rutaProductos}v1/productos/buscar/${nombre}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      if (tipo === "Todos") {
        return datos.data.response;
      } else {
        const respuesta = datos.data.response.filter(
          (producto) =>
            producto.NombreTipoProducto.toLowerCase() === tipo.toLowerCase()
        );
        return respuesta;
      }
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

### 4. `loadUnitKeys`

This function loads all available unit keys from the backend.

```javascript
export const loadUnitKeys = async (pagina) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/unidades/${pagina}`
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

### 5. `loadProductsKeys`

This function loads all available product keys from the backend.

```javascript
export const loadProductsKeys = async (pagina) => {
  try {
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

### 6. `findProductsKeys`

This function searches for product keys by description.

```javascript
export const findProductsKeys = async (palabra) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/productos/servicio/buscar/descripcion/${palabra}`
    );

    if (datos.data.response.length === 0) {
      Swal.fire({
        title: "No results found",
        text: "Try another word",
        icon: "info",
      });
      return false;
    }
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

### 7. `findUnitKeys`

This function searches for unit keys by name.

```javascript
export const findUnitKeys = async (palabra) => {
  try {
    const datos = await axios.get(
      `${process.env.VUE_APP_PATH_API}v1/unidades/buscar/nombre/${palabra}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      return datos.data;
    }
  } catch (error) {
    console.error(error);
    const { response } = error.request;
    Swal.fire({
      title: `${response.message ? response.message : "Error"}`,
      text: "No results found",
      icon: "info",
    });
  }
};
```

### 8. `getProduct`

This function retrieves detailed information about a product by its key.

```javascript
export const getProduct = async (clave) => {
  try {
    const datos = await axios.get(
      `${rutaProductos}v1/productos/detalle/${clave}`
    );

    if (datos.status === 200 && datos.statusText === "OK") {
      return datos.data.response[0];
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

### 9. `createProduct`

This function creates a new product in the backend.

```javascript
export const createProduct = async (producto) => {
  try {
    const data = await axios.post(
      `${rutaProductos}v1/productos/crear`,
      producto
    );

    if (data.status === 200 && data.statusText === "OK") {
      Swal.fire({
        title: `${data.data.message}:`,
        text: `Product with ID: ${data.data.ProductoId}`,
        icon: "success",
      });
      return true;
    }
  } catch (error) {
    const { response } = error.request;
    const msg = JSON.parse(response);
    console.error(error);
    Swal.fire({
      title: msg.status ? `${msg.status}` : `Error`,
      text: msg.error
        ? msg.error
        : msg.errors[0] === "Invalid value"
        ? `${msg.errors[1]}`
        : `${msg.errors[0]}`,
      icon: "error",
    });
  }
};
```

### 10. `deleteProduct`

This function deletes a product from the backend.

```javascript
export const deleteProduct = async (payload) => {
  try {
    const datos = await axios.delete(`${rutaProductos}v1/productos/borrar`, {
      data: payload,
    });

    if (datos.status === 200 && datos.statusText === "OK") {
      return true;
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
