# useCountries Composable

## Overview
The `useCountries` composable is designed to handle the loading and storage of a collection of countries within a Vue application. It interacts with a Pinia store to fetch country data and stores it in a reactive variable.

## Variables
- `countriesCollection`: A reactive reference that holds the collection of countries loaded from the store.

## Functions
- `loadCountries`: An asynchronous function that loads country data from the store and assigns it to `countriesCollection`.

## Usage
```javascript
import { useCountries } from '@/composables/useCountries';

export default {
  setup() {
    const { countriesCollection, loadCountries } = useCountries();

    onMounted(() => {
      loadCountries();
    });

    return {
      countriesCollection,
    };
  },
};
