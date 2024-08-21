
# zipCodeStore

The `zipCodeStore` is a Pinia store that manages the state, getters, and actions related to zip codes in the application. It interacts with the `zipCodeService` to fetch and search zip codes.

## State

### 1. `zipCodesCollection`

- **Type:** `Array`
- **Description:** An array that holds the list of zip codes.

### 2. `ZipCode`

- **Type:** `Object`
- **Description:** An object that holds the details of a single zip code.

## Getters

### 1. `getZipCodes`

Returns the list of zip codes from the state.

```javascript
getZipCodes(state) {
  return state.zipCodesCollection;
}
```

## Actions

### 1. `loadZipCode`

Fetches the list of zip codes from the backend and updates the state.

```javascript
async loadZipCode() {
  const data = await loadZipCode();
  if (data) {
    this.zipCodesCollection = data;
  }
}
```

### 2. `findZipCode`

Searches for a zip code and returns the data if found, otherwise returns false.

```javascript
async findZipCode(cp) {
  const data = await findZipCode(cp);
  if (data) {
    return data;
  }
  return false;
}
```

## Usage

```javascript
import { zipCodeStore } from '@/stores/zipCodeStore';

const store = zipCodeStore();
store.loadZipCode();
```
