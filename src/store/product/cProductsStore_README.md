
# cProductsStore

The `cProductsStore` is a Pinia store that manages the state, getters, and actions related to product keys in the application. It interacts with the `ProductKeyServices` to fetch the list of product keys.

## State

### 1. `productsKeysCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of product keys.

## Getters

### 1. `getProductsKeys`

Returns the list of product keys from the state.

```javascript
getProductsKeys(state) {
  return state.productsKeysCollection;
}
```

## Actions

### 1. `loadProductsKeys`

Fetches the list of product keys from the backend and updates the state.

```javascript
async loadProductsKeys() {
  const data = await ProductKeyServices.loadProductsKeys();
  if (data) {
    this.productsKeysCollection = data;
  }
}
```

## Usage

```javascript
import { cProductsStore } from '@/stores/cProductsStore';

const store = cProductsStore();
store.loadProductsKeys();
```
