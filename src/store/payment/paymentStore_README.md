
# paymentStore

The `paymentStore` is a Pinia store that manages the state, getters, and actions related to payment methods and forms in the application. It interacts with the `paymentServices` to fetch the list of payment methods and forms.

## State

### 1. `paymentMethodsCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of payment methods.

### 2. `paymentFormsCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of payment forms.

## Getters

### 1. `getPaymentMethods`

Returns the list of payment methods from the state.

```javascript
getPaymentMethods(state) {
  return state.paymentMethodsCollection;
}
```

### 2. `getPaymentForms`

Returns the list of payment forms from the state.

```javascript
getPaymentForms(state) {
  return state.paymentFormsCollection;
}
```

## Actions

### 1. `loadMethodsFormsPayments`

Fetches the list of payment methods and forms from the backend and updates the state.

```javascript
async loadMethodsFormsPayments() {
  const data = await paymentServices.loadMethodsFormsPayments();
  if (data) {
    const { metodos, formas } = data[0];
    this.paymentMethodsCollection = metodos;
    this.paymentFormsCollection = formas;
  }
}
```

## Usage

```javascript
import { paymentStore } from '@/stores/paymentStore';

const store = paymentStore();
store.loadMethodsFormsPayments();
```
