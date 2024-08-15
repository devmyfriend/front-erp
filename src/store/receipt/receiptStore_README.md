
# receiptStore

The `receiptStore` is a Pinia store that manages the state, getters, and actions related to receipts in the application. It interacts with the `receiptServices` to fetch, create, update, and delete receipts.

## State

### 1. `receiptsCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of receipts.

## Getters

### 1. `getReceipts`

Returns the list of receipts from the state.

```javascript
getReceipts(state) {
  return state.receiptsCollection;
}
```

## Actions

### 1. `loadReceipts`

Fetches the list of receipts from the backend and updates the state.

```javascript
async loadReceipts() {
  const data = await receiptServices.loadReceipts();
  if (data) {
    this.receiptsCollection = data;
  }
}
```

### 2. `createReceipt`

Creates a new receipt and reloads the list of receipts.

```javascript
async createReceipt(comprobante) {
  const data = await receiptServices.createReceipt(comprobante);
  if (data) {
    this.loadReceipts();
    return true;
  } else {
    return false;
  }
}
```

### 3. `updateReceipt`

Updates an existing receipt and reloads the list of receipts.

```javascript
async updateReceipt(comprobante) {
  const data = await receiptServices.updateReceipt(comprobante);
  if (data) {
    this.loadReceipts();
    return true;
  } else {
    return false;
  }
}
```

### 4. `deleteReceipt`

Deletes a receipt and reloads the list of receipts.

```javascript
async deleteReceipt(comprobante) {
  const data = await receiptServices.deleteReceipt(comprobante);
  if (data) {
    this.loadReceipts();
    return true;
  } else {
    return false;
  }
}
```

## Usage

```javascript
import { receiptStore } from '@/stores/receiptStore';

const store = receiptStore();
store.loadReceipts();
```
