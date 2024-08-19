
# usePaymentMethodsForms Composable

## Description
This composable is responsible for handling the collection and loading of payment methods and forms using a Pinia store. It allows the application to load payment methods and forms of payment from the store and provides reactive references for these collections.

## Methods and Properties

### `paymentMethodsCollection`
- **Type:** `ref([])`
- **Description:** A reactive array that holds the collection of payment methods. Initially, it is an empty array.

### `paymentFormsCollection`
- **Type:** `ref([])`
- **Description:** A reactive array that holds the collection of payment forms. Initially, it is an empty array.

### `loadMethodsFormsPayments()`
- **Type:** `async function`
- **Description:** This function loads the payment methods and forms of payment from the Pinia store. It updates `paymentMethodsCollection` and `paymentFormsCollection` with the data retrieved from the store.

## Example Usage

```javascript
import { onMounted } from 'vue';
import { usePaymentMethodsForms } from '@/composables/usePaymentMethodsForms';

export default {
  setup() {
    const { paymentMethodsCollection, paymentFormsCollection, loadMethodsFormsPayments } = usePaymentMethodsForms();

    onMounted(() => {
      loadMethodsFormsPayments();
    });

    return {
      paymentMethodsCollection,
      paymentFormsCollection,
    };
  },
};
```

## Notes
- Ensure that the `paymentStore` has the necessary actions to load the payment methods and forms.
- The composable relies on the `paymentStore` to provide data, so it should be used in conjunction with the store.
