
# useListZipCode

This composable manages the logic for handling a list of postal codes (zip codes). It interacts with the `useZipCode` store to load and search for zip codes, and provides reactive variables and functions to be used within Vue components.

## Imports

- `ref` from `vue`: Used to create reactive variables.
- `useZipCode` from `@/store/zipCode/zipCodeStore`: This store manages the state related to zip codes.
- `Swal` from `sweetalert2`: Used to display alerts to the user.

## State

- `store`: Instance of the `useZipCode` store.
- `zipCodesCollection`: A reactive array that holds the collection of zip codes.

## Methods

### waitSearch(cp)

This method is used to search for a zip code. If the zip code is found, it updates the `zipCodesCollection`. If no zip code is found, it displays an alert to the user.

- **Parameters:**
  - `cp` (String): The zip code to search for.

- **Usage:**
  ```javascript
  await waitSearch('12345');
  ```

- **Error Handling:** If an error occurs during the search, it logs the error to the console.

### loadData()

This method is used to load all zip codes from the store. If no zip codes are found, it displays an alert to the user. Otherwise, it updates the `zipCodesCollection`.

- **Usage:**
  ```javascript
  await loadData();
  ```

## Returns

The composable returns an object with the following properties:

- `waitSearch`: Method to search for a specific zip code.
- `loadData`: Method to load all zip codes.
- `zipCodesCollection`: Reactive array that holds the collection of zip codes.

## Example Usage

Here’s an example of how you can use the `useListZipCode` composable in a Vue component:

```javascript
<script setup>
import { useListZipCode } from '@/composables/useListZipCode';

const { waitSearch, loadData, zipCodesCollection } = useListZipCode();

onMounted(() => {
  loadData();
});

const searchZipCode = () => {
  waitSearch('12345');
};
</script>

<template>
  <div>
    <button @click="searchZipCode">Search Zip Code</button>
    <ul>
      <li v-for="zipCode in zipCodesCollection" :key="zipCode.id">{{ zipCode.name }}</li>
    </ul>
  </div>
</template>
```

This composable effectively abstracts the logic for managing and interacting with zip code data, making it easier to use and maintain in Vue components.
