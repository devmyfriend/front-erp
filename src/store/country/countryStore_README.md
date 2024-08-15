
# countryStore

The `countryStore` is a Pinia store that manages the state, getters, and actions related to countries in the application. It interacts with the `countryServices` to fetch the list of countries.

## State

### 1. `countriesCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of countries.

## Getters

### 1. `getCountries`

Returns the list of countries from the state.

```javascript
getCountries(state) {
  return state.countriesCollection;
}
```

## Actions

### 1. `loadCountries`

Fetches the list of countries from the backend and updates the state.

```javascript
async loadCountries() {
  const data = await countryServices.loadCountries();
  if (data) {
    this.countriesCollection = data;
  }
}
```

## Usage

```javascript
import { countryStore } from '@/stores/countryStore';

const store = countryStore();
store.loadCountries();
```
