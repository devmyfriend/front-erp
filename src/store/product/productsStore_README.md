
# productsStore

The `productsStore` is a Pinia store that manages the state, getters, and actions related to products in the application. It interacts with the `productServices` to fetch, create, update, and delete products.

## State

### 1. `productsCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of products.

### 2. `productsTypeCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of product types.

### 3. `productsKeysCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of product keys.

### 4. `Producto`

- **Type:** `Object`
- **Description:** An object that holds the details of a single product.

## Getters

### 1. `getProducts`

Returns the list of products from the state.

```javascript
getProducts(state) {
  return state.productsCollection;
}
```

### 2. `getProduct`

Returns the details of a single product from the state.

```javascript
getProduct(state) {
  return state.Producto;
}
```

### 3. `getTypeProducts`

Returns the list of product types from the state.

```javascript
getTypeProducts(state) {
  return state.productsTypeCollection;
}
```

### 4. `getProductsKeys`

Returns the list of product keys from the state.

```javascript
getProductsKeys(state) {
  return state.productsKeysCollection;
}
```

## Actions

### 1. `loadProducts`

Fetches the list of products from the backend and updates the state.

```javascript
async loadProducts() {
  const data = await productServices.loadProducts();
  if (data) {
    this.productsCollection = data;
  }
}
```

### 2. `loadTypeProducts`

Fetches the list of product types from the backend and updates the state.

```javascript
async loadTypeProducts() {
  const data = await productServices.loadTypeProducts();
  if (data) {
    this.productsTypeCollection = data;
  }
}
```

### 3. `findProducts`

Finds products by name and type, and updates the state with the search results.

```javascript
async findProducts(palabra, tipo) {
  const data = await productServices.findProducts(palabra, tipo);
  if (data) {
    this.productsCollection = data;
    return true;
  }
}
```

### 4. `deleteProduct`

Deletes a product and returns a boolean indicating success.

```javascript
async deleteProduct(payload) {
  const data = await productServices.deleteProduct(payload);
  if (data) {
    return true;
  }
}
```

### 5. `getProduct`

Fetches the details of a single product by ID and updates the state.

```javascript
async getProduct(id) {
  const data = await productServices.getProduct(id);
  if (data) {
    this.Producto = data;
    return true;
  }
}
```

### 6. `loadUnitKeys`

Fetches the list of unit keys from the backend and returns the data.

```javascript
async loadUnitKeys(pagina) {
  const data = await productServices.loadUnitKeys(pagina);
  if (data) {
    return data;
  }
}
```

### 7. `loadProductsKeys`

Fetches the list of product keys from the backend and updates the state.

```javascript
async loadProductsKeys(pagina) {
  const data = await productServices.loadProductsKeys(pagina);
  if (data) {
    this.productsKeysCollection = data;
    return data;
  }
}
```

### 8. `findProductsKeys`

Finds product keys by name and page number, and returns the data.

```javascript
async findProductsKeys(palabra, pagina) {
  const data = await productServices.findProductsKeys(palabra, pagina);
  if (data) {
    return data;
  }
}
```

### 9. `findUnitKeys`

Finds unit keys by name and page number, and returns the data.

```javascript
async findUnitKeys(palabra, pagina) {
  const data = await productServices.findUnitKeys(palabra, pagina);
  if (data) {
    return data;
  }
}
```

## Usage

```javascript
import { useProductos } from '@/stores/productsStore';

const store = useProductos();
store.loadProducts();
```
