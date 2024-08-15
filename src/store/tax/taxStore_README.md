
# taxStore

The `taxStore` is a Pinia store that manages the state, getters, and actions related to taxes in the application. It interacts with the `taxServices` to fetch, create, update, and delete taxes.

## State

### 1. `taxesCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of taxes.

## Getters

### 1. `getTaxes`

Returns the list of taxes from the state.

```javascript
getTaxes(state) {
  return state.taxesCollection;
}
```

## Actions

### 1. `loadTaxes`

Fetches the list of taxes from the backend and updates the state.

```javascript
async loadTaxes() {
  const data = await taxServices.loadTaxes();
  if (data) {
    this.taxesCollection = data;
  }
}
```

### 2. `createTaxes`

Creates a new tax and reloads the list of taxes.

```javascript
async createTaxes(impuesto) {
  const data = await taxServices.createTaxes(impuesto);
  if (data) {
    this.loadTaxes();
    return true;
  } else {
    return false;
  }
}
```

### 3. `updateTax`

Updates an existing tax and reloads the list of taxes.

```javascript
async updateTax(impuesto) {
  const data = await taxServices.updateTax(impuesto);
  if (data) {
    this.loadTaxes();
    return true;
  } else {
    return false;
  }
}
```

### 4. `deleteTax`

Deletes a tax and reloads the list of taxes.

```javascript
async deleteTax(impuesto) {
  const data = await taxServices.deleteTax(impuesto);
  if (data) {
    this.loadTaxes();
    return true;
  } else {
    return false;
  }
}
```

## Usage

```javascript
import { taxStore } from '@/stores/taxStore';

const store = taxStore();
store.loadTaxes();
```
